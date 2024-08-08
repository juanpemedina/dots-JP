import axios from "axios";

const checkAuth = async () => {
  try {
    const response = await axios.get("/api/user/", { withCredentials: true });
    const isAdmin = response.data.is_administrator;
    const isVolunteer = response.data.is_volunteer;
    if (isAdmin) {
      return "admin";
    } else if (isVolunteer) {
      return "volunteer";
    } else {
      console.error("User role not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data for role authentication:", error);
    // Redirect to login page if not authorized
    window.location.href = "/#/login";
    throw error;
  }
};

export default checkAuth;
