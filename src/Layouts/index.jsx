import React, { useEffect } from "react";
import { useMatch, useLocation } from "react-router-dom";
import { LoginRouter } from "../Routers/Login.router";
import { UserProvider } from "../context/user.context";
import { StorageService } from "../services";
import LoginLayout from "./Login";
import MainLayout from "./Main";

const isLoginRoute = () => !!LoginRouter.find((route) => useMatch(route.path));

const Layouts = () => {
  const location = useLocation();
  const isLoginPage = isLoginRoute();

  useEffect(() => {
    if (isLoginPage) {
      StorageService.setAuthKey(undefined);
    }
  }, [isLoginPage]);

  return (
    <>
      {isLoginPage ? (
        <LoginLayout />
      ) : (
        <UserProvider>
          <MainLayout />
        </UserProvider>
      )}
    </>
  );
};

export default Layouts;
