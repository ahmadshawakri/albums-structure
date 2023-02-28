import React, { useEffect, useContext } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';

import { AuthenticationService } from '../services';
import { UserContext } from '../context';
import { MainRouters } from '../Routers';

const Wrapper = ({ Component }) => <Component />;

const MainLayout = () => {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    if (!isLoggedIn) {
      navigate(
        `/login?returnUrl=${encodeURIComponent(
          window.location.href.replace(window.location.origin, ''),
        )}`,
      );
    } else setCurrentUser(AuthenticationService.getCurrentUser());
  }, [navigate, setCurrentUser]);

  return (
    <Routes>
      {MainRouters?.map((router, index) => (
        <Route
          path={router.path}
          exact={router.isExact}
          key={`${index}-${router.name}`}
          element={<Wrapper Component={router.component} />}
        />
      ))}
      <Route path='/' element={<Navigate replace to='/albums/' />} />
    </Routes>
  );
};

export default MainLayout;
