import axios from "axios";

const checkAuth = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/user/", {
      withCredentials: true, 
    });
    console.log("User Data:", response.data);
    const isAdmin = response.data.is_administrator;
    const isVolunteer = response.data.is_volunteer;
    return { isAdmin, isVolunteer }; // Return the isAdmin and isVolunteer status
  } catch (error) {
    console.error("Not authorized")
    window.location.href = "/#/login";
    throw error;	//delete
  }
};

export default checkAuth;
