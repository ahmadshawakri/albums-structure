import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Albums = lazy(() => import("./albums"));
// const Photos = lazy(() => import('./Photos'));

const Router = () => (
  <Suspense>
    <Routes>
      <Route path="" element={<Albums />} />
    </Routes>
  </Suspense>
);

export default Router;
