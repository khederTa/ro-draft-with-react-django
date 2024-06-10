/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import './Header.css'
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useAuth((state) => {
    return [state.isLoggedIn, state.user];
  });

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M832 384l8 1.6-1.6 8 1.6 3.2-4.8 3.2-44.8 161.6-16-4.8 40-147.2-260.8 144-158.4 284.8-11.2-6.4-6.4 6.4-176-176 11.2-11.2 163.2 163.2 147.2-265.6-294.4-297.6 11.2-11.2v-8h9.6l3.2-3.2 3.2 3.2L664 208l1.6 16-395.2 22.4 278.4 278.4 276.8-153.6 6.4 12.8z"
                  fill="#464b4f"
                />
                <path
                  d="M896 384c0 35.2-28.8 64-64 64s-64-28.8-64-64 28.8-64 64-64 64 28.8 64 64z m-656-32c-62.4 0-112-49.6-112-112s49.6-112 112-112 112 49.6 112 112-49.6 112-112 112z m304 336c-80 0-144-64-144-144s64-144 144-144 144 64 144 144-64 144-144 144z m-224 144c0-35.2 28.8-64 64-64s64 28.8 64 64-28.8 64-64 64-64-28.8-64-64z m-144-176c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32z m448-440c0-22.4 17.6-40 40-40s40 17.6 40 40-17.6 40-40 40-40-17.6-40-40zM736 560c0-27.2 20.8-48 48-48s48 20.8 48 48-20.8 48-48 48-48-20.8-48-48z"
                  fill="#cacfd4"
                />
              </svg>
              Refugee Ontology{" "}
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/make-query">
                    Query
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-instance">
                    New Instance
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                </li>
              </ul>

              {/* <Link className="btn btn-primary me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary me-2" to="/register">
                Register
              </Link> */}

              {/* These are the button rendered based on users logged in status */}
              {/* You could just un-comment it ;) */}

              {isLoggedIn ? (
                <>
                  <Link
                    className="btn me-2 nav-btn"
                    to={"/customer/account/"}
                  >
                    Account
                  </Link>
                  <Link className="btn me-2 nav-btn" to="/logout">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn me-2 nav-btn" to="/login">
                    Login
                  </Link>
                  <Link className="btn me-2 nav-btn" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
