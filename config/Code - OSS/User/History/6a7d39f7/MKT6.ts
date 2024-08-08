import axios from "axios";

interface AuthResponse {
  isAdmin: boolean;
}

async function checkAuth(): Promise<AuthResponse> {
  try {
    const response = await axios.get("/api/user");
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (user not logged in)
      throw new Error("User not logged in");
    } else {
      // Handle other errors
      throw error;
    }
  }
}

export default checkAuth;

