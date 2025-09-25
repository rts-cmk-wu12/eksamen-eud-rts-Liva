import RegisterForm from "@/components/forms/register-form/register-form";

export const metadata = {
    title: 'Register'
};

function RegisterPage() {
    return (
        <>
            <h1 className="heading">Register</h1>
            <RegisterForm />
        </>
    );
}

export default RegisterPage;