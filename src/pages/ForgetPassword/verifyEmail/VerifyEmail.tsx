import React from "react";
import { useParams } from "react-router-dom";
import { getuserInfo } from "../../../service/auth.service";

const VerifyEmail = () => {
  const { id } = useParams();
  const email = getuserInfo("email");
  return (
    <div>
      <p>{email}</p>
      <h1>thank you. your code is:{id} </h1>
    </div>
  );
};

export default VerifyEmail;
