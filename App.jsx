import { useState } from "react";
import "./Card.css";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="prnt_div">
      <div className="line-top"></div>
      <div className="react-hook">⚡ React Hook Form</div>
      <div className="nav-text">
        <h1 className="nav-text-h1">Ro'yxatdan O'tish</h1>
        <p className="nav-text-p">
          Barcha maydonlar validatsiya bilan himoyalangan. Real vaqtda xato xabarlari.
        </p>
      </div>
      <div className="watch-panel">
        <p className="loop">🔍 USEWATCH — REAL VAQT KUZATUV</p>
        <div className="watch-row">
          <p>userName: {userName === "" ? "-" : userName}</p>
          <p>email: {email === "" ? "-" : email}</p>
          <p>isValid: {isValid === "" ? "-" : isValid}</p>
        </div>
      </div>
      <div className="inputs">
        <div action="" className="full-name">
          <span>To`liq Ism</span>
          <input type="text" placeholder="Abdullayev Jasur" />
        </div>
        <div action="" className="username">
          <span>Username</span>
          <input className="inputs-username"
            placeholder="jasur_dev"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div action="" className="selection">
          <span>Rol</span>
          <select name="" id="selector" placeholder="Developer">
            <option value="">Developer</option>
            <option value="">Designer</option>
            <option value="">Manager</option>
            <option value="">Talaba</option>
          </select>
        </div>
        <div action="">
          <span>Email</span>
          <input className="inputs-email"
            placeholder="jasur@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div action="">
          <span>Parol</span>
          <input type="password" placeholder="......" />
        </div>
      </div>
    </div >
  );
}

export default App;