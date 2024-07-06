import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    console.log("Attempting login");
    const res = await axios.post("/auth/login", userCredential);
    console.log("Login successful", res.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    console.log("Login failed", err);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
