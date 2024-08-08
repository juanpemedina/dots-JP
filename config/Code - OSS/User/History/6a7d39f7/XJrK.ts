import axios from "axios";

const checkAuth = async () => {
  try {
    // Send a request to your backend to check if the user is authenticated
    const response = await axios.get("http://localhost:8000/api/user/", {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    console.log("Use Data:", response.data);
    // If user is authenticated, return true
    return true;
  } catch (error) {
    // If user is not authenticated, redirect to login page
    window.location.href = "/#/login";		
    // Return false to indicate authentication failure
    return false;
  }
};

export default checkAuth;
