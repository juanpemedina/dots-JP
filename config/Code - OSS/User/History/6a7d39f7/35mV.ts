import axios from "axios";

const API_URL = "http://localhost:8000/api/user/";

const checkAuth = async () => {
  try {
    // Send a request to your backend to check if the user is authenticated
    const response = await axios.get(API_URL, {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    
    // Assuming your backend returns a boolean indicating authentication status
    const isAuthenticated = response.data.isAuthenticated;
    
    if (isAuthenticated) {
      console.log("User is authenticated");
      return true;
    } else {
      console.error("User is not authenticated");
      redirectToLogin();
      return false;
    }
  } catch (error) {
    console.error("Error while checking authentication:", error);
    redirectToLogin();
    return false;
  }
};

const redirectToLogin = () => {
  // Redirect to the login page
  window.location.href = "/#/login";
};

export default checkAuth;
