function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row">

            {/*Left Panel*/}

            <div className="bg-neo-yellow w-full lg:w-1/2">
                <div className="bg-white border-4">
                    <div className="bg-black text-white font-bold text-16px font-bold p-4">
                        DID YOU KNOW?
                    </div>
                    <div>
                        <div>
                            <h2>If education itself doesn't change society, then society can't change itself without it.</h2>
                        </div>
                        <div>
                            <p>Paulo Freire</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*Right Panel*/}

            <div className="bg-neo-bg w-full lg:w-1/2">

            </div>
        </div>
    )
}

export default AuthLayout;