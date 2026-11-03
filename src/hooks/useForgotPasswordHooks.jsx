import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyContext";

export const useForgot = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { registeredUsers, setRegisteredUsers } = useContext(MyStore);
  const [forgotPassUser, setForgotPassUser] = useState(null);

  const forgetPasswordFormSubmit = (data) => {
    const registeredUser = registeredUsers.some(
      (user) => user.email === data.email,
    );
    if (!registeredUser) {
      toast.error("No account found with this email address.");
      return;
    }

    const tempRegisteredUser = registeredUsers.map((user) => {
      if (user.email === data.email) {
        user.password = data.password;
      }
      return user;
    });
    setRegisteredUsers(tempRegisteredUser);
    localStorage.setItem("registeredUsers", JSON.stringify(tempRegisteredUser));
    toast.success("Password updated successfully! You can now sign in.");
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    errors,
    forgotPassUser,
    setForgotPassUser,
    forgetPasswordFormSubmit,
  };
};
