
function Login(){
    return(
        <div>
            <h1>Login</h1>
            <label htmlFor="email">
                Mail:
                <input type="email" />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" />
            </label>
        </div>
    )
}

export default Login