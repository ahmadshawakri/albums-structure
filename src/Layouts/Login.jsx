import React, { lazy } from "react";

const Login = lazy(() => import("../views/login/Login"));

const LoginLayout = () => <Login />;

export default LoginLayout;
