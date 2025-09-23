import LoginForm from "@/components/forms/login-form/login-form";

export const metadata = {
    title: 'Login'
};

function LoginPage() {
    return (
        <>
            <h1 className="heading">Login</h1>
            <LoginForm />
        </>
    );
}

export default LoginPage;