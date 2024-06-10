import { useEffect } from "react";
import { logout } from "../../utils/auth";
import { Link } from "react-router-dom";
function Logout() {
  useEffect(() => {
    logout();
  }, []);
  return (
    <>
      <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="card rounded-5">
                  <div className="card-body p-4 text-center">
                    <h3>You have been logged out</h3>
                    <Link to='/register' className="btn btn-primary">Register <i className="bi bi-person-plus-fill" /></Link>
                    <Link to='/login' className="btn btn-primary ms-2">Login <i className="bi bi-box-arrow-in-right" /></Link>
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

export default Logout;
