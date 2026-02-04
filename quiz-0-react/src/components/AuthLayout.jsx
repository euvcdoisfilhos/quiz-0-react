function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen bg-b-yellow flex items-center justify-center">
            {children}
        </div>
    )
}

export default AuthLayout;