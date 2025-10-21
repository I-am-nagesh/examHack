import { Routes, Route } from "react-router-dom";
import HomePage from "../homepage/pages/HomePage.jsx";

import BankPage from "../bank/BankPage.jsx";
import RailwayPage from "../railway/RailwayPage.jsx";
import SscPage from "../ssc/SscPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bank" element={<BankPage />} />
      <Route path="/railway" element={<RailwayPage />} />
      <Route path="/ssc" element={<SscPage />} />
    </Routes>
  );
}
