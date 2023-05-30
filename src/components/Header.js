import React, {useEffect, useState} from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import AuthService from "../services/auth.service";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  console.log("current user", currentUser)
  return (
      currentUser ? (
          <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/">
                <img width="200" height="100" src={Logo} alt="" />
              </Link>
              <div className="flex items-center gap-6">
                <a href="/login" className="hover:text-violet-900" onClick={logOut}>
                  Logout
                </a>
              </div>
            </div>
          </header>
        ) : (
          <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/">
                <img width="200" height="100" src={Logo} alt="" />
              </Link>
              <div className="flex items-center gap-6">
                <Link className="hover:text-violet-900" to="/login">
                  Log in
                </Link>
                <Link
                    className="bg-violet-700 hover:text-violet-800
                text-white px-4 py-3 rouded-lg transition"
                    to="/register"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </header>
        )
  );
};

export default Header;
