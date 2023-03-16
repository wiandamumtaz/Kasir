import { useState } from 'react';
import '../src/App.css'

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleFormToggle = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("username:", username, "Password:", password);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username, "username:", username, "Password:", password);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className={isLoginFormVisible ? "login" : "register"}>
        <form className="form" onSubmit={isLoginFormVisible ? handleLoginSubmit : handleRegisterSubmit}>
          <label htmlFor="chk" aria-hidden="true" onClick={handleFormToggle}>
            {isLoginFormVisible ? "Log in" : "Register"}
          </label>
          {isLoginFormVisible ? (
            <>
              <input className="input" type="username" name="username" placeholder="username" value={username} onChange={handleUsernameChange} required />
              <input className="input" type="password" name="pswd" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </>
          ) : (
            <>
              <input className="input" type="text" name="txt" placeholder="Username" value={username} onChange={handleUsernameChange} required />
              <input className="input" type="username" name="username" placeholder="username" value={username} onChange={handleUsernameChange} required />
              <input className="input" type="password" name="pswd" placeholder="Password" value={password} onChange={handlePasswordChange} required />
            </>
          )}
          <button>{isLoginFormVisible ? "Log in" : "Register"}</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
