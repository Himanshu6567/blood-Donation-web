import React from "react";
import Forgot from "./Forgot";
import LoginPage from "./LoginPage";
import NeedBlood from "./NeedBlood";
import Newuser from "./NewUser";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Submit from "./Submit";

function App() {
  return (
    <div className="flex flex-col flex-wrap">
      <Navbar />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="home" element={<NeedBlood />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="newuser" element={<Newuser />} />
        <Route path="profile" element={<Submit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
