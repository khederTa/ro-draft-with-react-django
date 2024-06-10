/* eslint-disable no-unused-vars */
// import { useAuth } from "../../auth/auth";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import api from "../../api";

function Dashboard() {
  //const [isLoading, setIsLoading] = useState(false);
  //const [refugee, setRefugee] = useState();
  // const [isLoggedIn, setIsLoggedIn] = useAuth((state) => {
  //   return [state.isLoggedIn, state.user];
  // });

  // const handleSubmit = async () => {
  //   setIsLoading(true);
  //   try {
  //     api
  //       .get("/user/would-be-returnee/")
  //       .then((response) => console.log(response))
  //       .catch((error) => console.error(error));
  //   } catch (error) {
  //     console.error(error);
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      <div className="container">
        <h2 className="concept-header">
          <a id="concept">Relation</a>
        </h2>
        <div>
          <svg id="main-graph" width="800" height="600"></svg>
        </div>
      </div>
      {/* {isLoggedIn ? (
        <div>
          <h1>Dashboard</h1>
          <button className="btn btn-success" onClick={handleSubmit}>
            Would Be returnee
          </button>
          <br />
          <br />
          {isLoading ? "Loading..." : JSON.stringify(refugee)}
          <br />
          <br />
          <Link to={"/logout"}>Logout</Link>
        </div>
      ) : (
        <div>
          <h1>Home</h1>
          <div className="d-flex">
            <Link className="btn btn-primary" to={"/register"}>
              Register
            </Link>
            <br />
            <Link className="btn btn-success ms-4" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Dashboard;
