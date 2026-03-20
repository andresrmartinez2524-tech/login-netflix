function Login() {
    return (
        <>
            <section className="hero">
                <div className="contenedor">
                    <h1>Sign In</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Email or phone number" />

                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Password" />

                    </div>
                    <button className="btn" type="button">Sign In</button>


                    <div className="text-help">
                        <label>
                            <input className="check" type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Need Help</a>
                    </div>
                    <div className="text-help-2">
                        <p>New to Netflix?  <a href="#">Sing Up Now</a> </p>
                    </div>
                    <div className="text-help-3">
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more</a></p>
                    </div>
                </div>

            </section>
        </>
    )


}
export default Login