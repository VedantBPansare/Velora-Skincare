import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();

    const savedUser = JSON.parse(
        localStorage.getItem("veloraUser")
    );

    const [name, setName] = useState(
        savedUser?.name || ""
    );

    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim().length < 3) {
            alert("Name must contain at least 3 characters.");
            return;
        }

        const updatedUser = {
            ...savedUser,
            name: name.trim()
        };

        localStorage.setItem(
            "veloraUser",
            JSON.stringify(updatedUser)
        );

        window.dispatchEvent(
            new Event("veloraAuthChange")
        );

        alert("Profile updated successfully!");

        navigate("/");
    }

    return (
        <main className="profile-page">
            <div className="profile-box">
                <p className="eyebrow">
                    YOUR PROFILE
                </p>

                <h1>Edit Profile</h1>

                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        value={savedUser?.email || ""}
                        disabled
                    />

                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Profile;