import axios from "axios";

const LOGIN_URL = "/#/login"; // Define login URL here

const checkAuth = async () => {
  try {
    const response = await axios.get("/api/user", { withCredentials: true }); // Assuming you have a base URL set up
    console.log("User Data:", response.data);
    return true;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access");
      redirectToLogin();
    } else {
      console.error("Error while checking authentication:", error.message);
    }
    return false;
  }
};

const redirectToLogin = () => {
  window.location.href = LOGIN_URL;
};

export default checkAuth;
