import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import apiInstance from "../../utils/axios";
function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [searchParam] = useSearchParams();
  const otp = searchParam.get("otp");
  const uidb64 = searchParam.get("uidb64");
  const navigate = useNavigate();
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      setIsLoading(false);
      alert("Password Does Not Match");
    } else {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("password", password);
      formData.append("otp", otp);
      formData.append("uidb64", uidb64);
      try {
        await apiInstance
          .post(`user/password-change/`, formData)
          .then((res) => {
            console.log(res.data);
            alert("Password Changed Successfully");
            navigate("/login");
          });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.error(error);
        alert("An Error Occured While Trying To Change The Password");
      }
    }
  };
  return (
    <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
      <div className="container">
        <section className="">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-5 col-md-8">
              <div className="card rounded-5">
                <div className="card-body p-4">
                  <h3 className="text-center">Create New Password</h3>
                  <br />

                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                    >
                      <form onSubmit={handlePasswordSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="Full Name">
                            Enter New Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            required
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="Full Name">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            required
                            name="confirmPassword"
                            className="form-control"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          {/* {error !== null &&
                                                            <>
                                                                {error === true

                                                                    ? <p className='text-danger fw-bold mt-2'>Password Does Not Match</p>
                                                                    : <p className='text-success fw-bold mt-2'>Password Matched</p>
                                                                }
                                                            </>
                                                        } */}
                        </div>

                        <div className="text-center">
                          {isLoading === true ? (
                            <button
                              disabled
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Processing <i className="bi bi-hourglass-split" />
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Reset Password{" "}
                              <i className="bi bi-person-fill-check" />
                            </button>
                          )}
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
  );
}

export default CreatePassword;
