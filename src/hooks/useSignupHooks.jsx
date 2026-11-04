import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export const useSignup = () => {
  let {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { setRegisteredUsers, registeredUsers } = useContext(MyStore);
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const { confirmPassword, ...formData } = data;
    // make a use state , then store form data there , then store it in local storage.
    const tempRegisteredUsers = [
      ...registeredUsers,
      { ...formData, id: nanoid() },
    ];
    console.log(tempRegisteredUsers);
    setRegisteredUsers(tempRegisteredUsers);
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(tempRegisteredUsers),
    );
    reset();
    toast.success("User registered successfully!");
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    reset,
    getValues,
    errors,
    setRegisteredUsers,
    registeredUsers,
    navigate,
    formSubmit,
  };
};
