import logo from "./logo.svg";
import "./App.css";
import {auth, provider} from "./Config";
import {signInWithPopup} from "firebase/auth";
import {useEffect, useState} from "react";
function App() {
    const handleClick = () => {
        signInWithPopup(auth, provider).then(
            (data) => {
                console.log("data:", data);
                setValue(data);
                localStorage.setItem(
                    "email",
                    data?.user?.email
                );
            }
        );
    };
    const signOut = () => {
        localStorage.clear();
        window.location.reload();
    };
    useEffect(() => {
        setValue(localStorage.getItem("email"));
    });
    const [value, setValue] = useState("");
    return (
        <div className="App">
            <h3>gogle sign in</h3>
            <button onClick={handleClick}>
                sign in with Google
            </button>
            <button onClick={signOut}>
                sign out
            </button>
            <p>
                stored val:{" "}
                {JSON.stringify(value)}
            </p>
        </div>
    );
}

export default App;
