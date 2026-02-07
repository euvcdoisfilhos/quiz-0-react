function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row">

            {/*Left Panel*/}

            <div className="bg-neo-yellow w-full lg:w-1/2 p-4">
                <div className="bg-white border-4 p-4">
                    <div className="bg-black w-40 text-white font-bold text-16px font-bold p-4">
                        DID YOU KNOW?
                    </div>
                    <div>
                        <div>
                            <h2>If education itself doesn't change society, then society can't change itself without it.</h2>
                            <p>Paulo Freire</p>
                        </div>
                    </div>
                    <img src="src/assets/paulo-freire-removebg-preview.png" alt="Paulo Freire" />
                </div>
            </div>

            {/*Right Panel*/}

            <div className="bg-neo-bg w-full lg:w-1/2">

            </div>
        </div>
    )
}

export default AuthLayout;