import axios from "axios";

const checkAuth = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/user/", {
      withCredentials: true, 
    });
    console.log("User Data:", response.data);
    return false;
  } catch (error) {
    console.error("Not authorized")
    window.location.href = "/#/login";		
    return true;
  }
};

export default checkAuth;
