

const Login = () => {

    return(
        <div style={{backgroundColor: 'lightblue'}}>
            <form>
                <label>
                    Email:
                    <input type="email" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login