import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutesArray } from "./config";

import PageLayout from "src/layouts/PageLayout/PageLayout";

const RoutesWrapper = () => {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          {PrivateRoutesArray.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </Suspense>
    </PageLayout>
  );
};

export default RoutesWrapper;
