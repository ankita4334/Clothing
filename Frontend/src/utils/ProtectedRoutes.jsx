import React, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import AuthModal from "../components/AuthModal";

const ProtectedRoutes = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const { isLoggedIn, userData } = useContext(AppContent);
  console.log("userData: ", userData);

  if (!isLoggedIn) {
    setIsAuthModalOpen(true);
  }

  return (
    <>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <>
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
          <Navigate to="/" replace />
        </>
      )}
    </>
  );
};

export default ProtectedRoutes;
