import axios from "axios";

const checkAuth = async () => {
  try {
    await axios.get("http://localhost:8000/api/user/", {
      withCredentials: true, 
    });
    return true;
  } catch (error) {
    console.error("Unauthorized access")
    window.location.href = "/#/login";		
    return false;
  }
};

export default checkAuth;
