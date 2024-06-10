/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/auth/Dashboard";
import Logout from "./views/auth/Logout";
import ForgetPassword from "./views/auth/ForgetPassword";
import CreatePassword from "./views/auth/CreatePassword";
import StoreHeader from "./views/base/StoreHeader";
import StoreFooter from "./views/base/StoreFooter";
import MainWrapper from "./layout/MainWrapper";
import RefugeeForm from "./views/refugeeForm/RefugeeForm";
import QueryForm from "./views/queryForm/QueryForm";
import Home from "./views/home/Home"
function App() {
  return (
    <BrowserRouter>
      <StoreHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/create-new-password" element={<CreatePassword />} />
        <Route path="/add-instance" element={<RefugeeForm />} />
        <Route path="/make-query" element={<QueryForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <StoreFooter />
    </BrowserRouter>
  );
}

export default App;
