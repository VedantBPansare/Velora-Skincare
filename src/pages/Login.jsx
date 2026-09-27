import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const savedUser = JSON.parse(
            localStorage.getItem("veloraUser")
        );

        if (!savedUser) {
            setError("No account found. Please sign up first.");
            return;
        }

        if (
            email !== savedUser.email ||
            password !== savedUser.password
        ) {
            setError("Invalid email or password.");
            return;
        }

       localStorage.setItem(
    "veloraLoggedIn",
    "true"
);

window.dispatchEvent(
    new Event("veloraAuthChange")
);

navigate("/");
    }

    return (
        <main className="auth-page">
            <div className="auth-box">
                <p className="eyebrow">WELCOME BACK</p>

                <h1>Login</h1>

                <p className="auth-subtitle">
                    Login to continue to your VELORA account.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />

                    {error && (
                        <p className="form-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="primary-button auth-button"
                    >
                        Login
                    </button>
                </form>

                <p className="auth-switch">
                    Don't have an account?{" "}
                    <Link to="/signup">Create Account</Link>
                </p>
            </div>
        </main>
    );
}

export default Login;