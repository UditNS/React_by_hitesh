import React from "react";
import { Container, LogoutBtn, Logo } from "../index";
import { Link, Links, useNavigate, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => {
    state.auth.status;
  });
  const navigate = useNavigate();

  const naItem = [{ name: "Home", slug: "active" }];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
                <li>
                    <LogoutBtn />d
                </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
