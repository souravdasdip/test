import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const UsersList = React.lazy(() => import("./pages/Users/UsersList"));
const UserProfile = React.lazy(() => import("./pages/Users/UserProfile"));

function App() {
  return (
    <React.Suspense
      fallback={
        <div>
          <strong>.......Please wait</strong>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path=":user" element={<UserProfile />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
