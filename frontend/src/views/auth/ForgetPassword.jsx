import { useState } from "react";
import apiInstance from "../../utils/axios";
import { Link } from "react-router-dom";
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      apiInstance.get(`user/password-reset/${email}/`).then((res) => {
        console.log(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
          {/* Section: Login form */}
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="card rounded-5">
                  <div className="card-body p-4">
                    <h3 className="text-center">Forgot Password</h3>
                    <br />

                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <form onSubmit={handleSubmit}>
                          {/* Email input */}
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="Full Name">
                              Email Address
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="text-center mb-4">
                            {isLoading === true 
                            ?<button disabled className="btn btn-primary w-100">
                            Processing <i className="bi bi-hourglass-split" />
                          </button>
                          :<button className="btn btn-primary w-100">
                          Send Email <i className="bi bi-send-fill" />
                        </button>}
                          </div>
                          <div className="text-center">
                            <p>
                              Want to sign in? <Link to="/login">Login</Link>
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
    </div>
  );
}

export default ForgetPassword;
