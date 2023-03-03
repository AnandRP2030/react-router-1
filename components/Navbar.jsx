import style from "./myStyle.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const {isLoggedIn, login, logout} = useContext(AuthContext);

console.log('login', isLoggedIn);
  return (
    <div className={style.navbar}>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu"> Product </Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/">
          {" "}
          <i class="fa-solid fa-cart-shopping"></i>{" "}
        </Link>
      </li>
      {/* <li>
        <Link to="/logout">
          <button> Logout </button>
        </Link>
      </li> */}
      <li>
        <button disabled={isLoggedIn} onClick={login}>Log in</button>
      </li>
      <li>
        <button disabled={!isLoggedIn} onClick={logout}>Log Out</button>
      </li>
    </div>
  );
}
