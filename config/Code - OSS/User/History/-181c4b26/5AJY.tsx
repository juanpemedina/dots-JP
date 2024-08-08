import { Outlet } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import checkAuth from "../utils/apiCheckAuth";
import { useEffect, useState } from "react";

/**
 * General Layout
 */
function RootLayout() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Add state to track if authentication check is completed

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { isAdmin } = await checkAuth();
        setIsAdmin(isAdmin);
        setIsAuthChecked(true); // Set authentication check complete
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };
    
    if (!isAuthChecked) { // Check if authentication is not checked yet
      fetchUserData();
    }
  }, [isAuthChecked]); // Call useEffect only when isAuthChecked changes

  return (
    <>
      {isAuthChecked && ( // Render only when authentication check is complete
        <>
          <NavBar isAdmin={isAdmin} />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}

export default RootLayout;
