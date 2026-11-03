import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useLogin = () => {
  let navigate = useNavigate();
  const { setLoggedInUser, registeredUsers } = useContext(MyStore);

  const loginFormSubmit = (data) => {
    const user = registeredUsers.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );
    if (!user) {
      setError("root", {
        type: "manual",
        message: "Invalid email or password",
      });
      toast.error("Invalid username or password");
    } else {
      setLoggedInUser(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/main");
    }
  };
  
  let {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return {
    loginFormSubmit,
    register,
    handleSubmit,
    reset,
    setError,
    errors,
    navigate,
  };
};
