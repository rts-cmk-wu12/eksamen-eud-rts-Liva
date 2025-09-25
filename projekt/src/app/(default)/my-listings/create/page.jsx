import CreateForm from "@/components/forms/create-form/create-form";

export const metadata = {
    title: 'Create new listing'
};

function MyListingsCreatePage() {
    return (
        <>
            <h1 className="heading">Create new listing</h1>
            <CreateForm />
        </>
    );
}

export default MyListingsCreatePage;