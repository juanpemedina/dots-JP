import axios from "axios";
import { useState } from "react";

const checkAuth = async () => {
  const [authChecked, setAuthChecked] = useState(false);

  try {
    if (!authChecked) {
      const response = await axios.get("http://localhost:8000/api/user/", {
        withCredentials: true,
      });
      console.log("User Data:", response.data);
      setAuthChecked(true);
      return true;
    }
  } catch (error) {
    console.error("Not authorized");
    if (!authChecked) {
      setAuthChecked(true);
      window.location.href = "/#/login";
    }
    return false;
  }
};

export default checkAuth;
