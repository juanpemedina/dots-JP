import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState
import NavBar from "../components/navigation/NavBar";
import checkAuth from "../utils/apiCheckAuth";

/**
 * General Layout
 */
function RootLayout() {
  const [userRole, setUserRole] = useState(null); // State to store user role

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user role from the backend
        const role = await checkAuth();
        setUserRole(role); // Set the user role in state
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar userRole={userRole} /> {/* Pass userRole as a prop */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
