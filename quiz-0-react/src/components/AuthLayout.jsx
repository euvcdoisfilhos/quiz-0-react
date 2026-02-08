function AuthLayout() {
    return (
        <div>
            <div className="border-4 shadow-neo p-1 flex justify-center items-center w-[clamp(300px,500px,100%)] space-x-15">
                <button className="bg-b-yellow py-2 px-8 text-lg">LOGIN</button>
                <button className="bg-b-yellow py-2 px-8 text-lg">SIGN UP</button>
            </div>
            <h2 className="login-h1">Welcome Back.</h2>
            <p className="login-p">Enter your details to sign in to your account.</p>
            <form action="">
                <label htmlFor=""></label>
            </form>
        </div>
    )
}

export default AuthLayout;