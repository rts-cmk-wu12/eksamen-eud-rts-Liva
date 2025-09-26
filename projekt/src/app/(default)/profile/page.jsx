import { cookies } from "next/headers";
import myFetch from "@/utils/fetch";
import ProfileForm from "@/components/forms/profile-form/profile-form";

export const metadata = {
    title: 'Profile'
};

async function ProfilePage() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id').value;
    const accessToken = cookieStore.get('sh_access_token').value;

    const data = await myFetch(`api/v1/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    return (
        <>
            <h1 className="heading">Profile</h1>
            <ProfileForm data={data} />
        </>
    );
}

export default ProfilePage;