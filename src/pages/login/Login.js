import Account from "../../component-login/account/Account";
import Header from "../../component-login/header/Header";
import "./Login.css"

export default function Login() {
    return (
        <div className="Login">
            <Header/>
            <Account/>
        </div>
    );
}
