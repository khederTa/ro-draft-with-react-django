/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { login, setUser } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../auth/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const setLoading = useAuth((state) => state.setLoading);

  const navigate = useNavigate();

  useEffect(() => {
    const initializeUser = async () => {
      await setUser();
      setLoading(false);
      if (isLoggedIn()) {
        navigate("/");
      }
    };

    initializeUser();
  }, [isLoggedIn, navigate, setLoading]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    login(email, password)
      .then(({ error }) => {
        if (error) {
          alert(error);
          setIsLoading(false);
        } else {
          navigate("/");
          resetForm();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };

  return (
    <>
      <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="card rounded-5">
                  <div className="card-body p-4">
                    <h3 className="text-center">Login</h3>
                    <br />
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <form onSubmit={handleLogin}>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          {isLoading ? (
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              disabled
                            >
                              <span className="mr-2">Processing </span>
                              <i className="bi bi-hourglass-split" />
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              <span className="mr-2">Sign In </span>
                              <i className="bi bi-box-arrow-in-right" />
                            </button>
                          )}
                          <div className="text-center">
                            <p className="mt-4">
                              Don't have an account?{" "}
                              <Link to="/register">Register</Link>
                            </p>
                            <p className="mt-0">
                              <Link
                                to="/forgot-password"
                                className="text-danger"
                              >
                                Forgot Password?
                              </Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;

// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { login } from "../../utils/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../../auth/auth";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const isLoggedIn = useAuth((state) => state.isLoggedIn);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoggedIn()) {
//       navigate("/");
//     }
//   });

//   const resetForm = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     login(email, password)
//       .then(({ error }) => {
//         if (error) {
//           alert(error);
//           setIsLoading(false);
//         } else {
//           navigate("/");
//           resetForm();
//           setIsLoading(false);
//         }
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         alert(error);
//       });
//   };

//   return (
//     <>
//       <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
//         <div className="container">
//           {/* Section: Login form */}
//           <section className="">
//             <div className="row d-flex justify-content-center">
//               <div className="col-xl-5 col-md-8">
//                 <div className="card rounded-5">
//                   <div className="card-body p-4">
//                     <h3 className="text-center">Login</h3>
//                     <br />

//                     <div className="tab-content">
//                       <div
//                         className="tab-pane fade show active"
//                         id="pills-login"
//                         role="tabpanel"
//                         aria-labelledby="tab-login"
//                       >
//                         <form onSubmit={handleLogin}>
//                           {/* Email input */}
//                           <div className="form-outline mb-4">
//                             <label className="form-label" htmlFor="Full Name">
//                               Email Address
//                             </label>
//                             <input
//                               type="email"
//                               id="username"
//                               name="username"
//                               className="form-control"
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)}
//                             />
//                           </div>

//                           <div className="form-outline mb-4">
//                             <label
//                               className="form-label"
//                               htmlFor="loginPassword"
//                             >
//                               Password
//                             </label>
//                             <input
//                               type="password"
//                               id="password"
//                               name="password"
//                               className="form-control"
//                               value={password}
//                               onChange={(e) => setPassword(e.target.value)}
//                             />
//                           </div>

//                           {isLoading === true ? (
//                             <button
//                               className="btn btn-primary w-100"
//                               type="submit"
//                               disabled
//                             >
//                               <span className="mr-2">Processing </span>
//                               <i className="bi bi-hourglass-split" />
//                             </button>
//                           ) : (
//                             <button
//                               className="btn btn-primary w-100"
//                               type="submit"
//                             >
//                               <span className="mr-2">Sign In </span>
//                               <i className="bi bi-box-arrow-in-right" />
//                             </button>
//                           )}

//                           <div className="text-center">
//                             <p className="mt-4">
//                               Don't have an account?{" "}
//                               <Link to="/register">Register</Link>
//                             </p>
//                             <p className="mt-0">
//                               <Link
//                                 to="/forgot-password"
//                                 className="text-danger"
//                               >
//                                 Forgot Password?
//                               </Link>
//                             </p>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Login;
