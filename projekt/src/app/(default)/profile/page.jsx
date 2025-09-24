import ProfileForm from "@/components/forms/profile-form/profile-form";
import { cookies } from "next/headers";

export const metadata = {
    title: 'Profile'
};

async function ProfilePage() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('sh_user_id').value;
    const accessToken = cookieStore.get('sh_access_token').value;

    return (
        <>
            <h1 className="heading">Profile</h1>
            <ProfileForm userId={userId} accessToken={accessToken} />
        </>
    );
}

export default ProfilePage;