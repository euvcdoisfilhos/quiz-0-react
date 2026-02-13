import eye from "../assets/eye.svg";
function AuthLayout() {
    return (
        <div>
            <div className="border-4 shadow-neo p-1 flex justify-center items-center w-[clamp(300px,500px,100%)] space-x-15 m-2">
                <button className="bg-b-yellow py-2 px-8 text-lg">LOGIN</button>
                <button className="bg-b-yellow py-2 px-8 text-lg">SIGN UP</button>
            </div>
            <h2 className="login-h1">Welcome Back.</h2>
            <p className="login-p">Enter your details to sign in to your account.</p>
            <form action="">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input className="login-input" type="email" id="email" name="email"/>
                <br />
                <label htmlFor="password">PASSWORD</label>
                <div className="relative">
                    <input className="login-input" type="password" id="password" name="password" />
                    <button className="eye-icon"><img src={eye} alt="Eye" className="brightness-0"/></button>
                </div>
                <br />
                <button className="login-button shadow-neo" type="submit">LOG IN</button>
            </form>
        </div>
    )
}

export default AuthLayout;