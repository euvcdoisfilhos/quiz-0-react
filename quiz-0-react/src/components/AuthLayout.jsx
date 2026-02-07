function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row">

            {/*Left Panel*/}

            <div className="bg-neo-yellow w-full lg:w-1/2 p-5 flex justify-center items-center border-r-5 border-black">
                <div className="bg-white border-4 p-4 w-[clamp(300px,470px,100%)] h-470px shadow-neo p-5 rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-black w-40 text-white text-16px p-4 mb-5 ">
                        <h2 className="font-bold">DID YOU KNOW?</h2>
                    </div>
                    <div>
                        <div>
                            <h2 className="font-bold text-2xl mb-5">If education itself doesn't change society, then society can't change itself without it.</h2>
                            <p className="font-bold text-xl mb-5">Paulo Freire</p>
                        </div>
                    </div>
                    <img src="src/assets/paulo-freire-removebg-preview.png" alt="Paulo Freire" className="mt-[-40px]" />
                </div>
            </div>

            {/*Right Panel*/}

            <div className="bg-neo-bg w-full lg:w-1/2">

            </div>
        </div>
    )
}

export default AuthLayout;