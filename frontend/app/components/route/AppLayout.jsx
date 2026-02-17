"use client";

import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";

export default function AppLayout({ children }) {
  const { user, hydrated } = useSelector((s) => s.auth);

  if (!hydrated) return null;

  const isLoggedIn = !!user;

  return (
    <>
      {isLoggedIn && <Navbar />}
      {children}
      {isLoggedIn && <Footer />}
    </>
  );
}
