/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import verifyImage from "../../assets/verify.svg";
import { useVerifyEmailMutation } from "../../redux/api/authApi";
import { useEffect } from "react";
const SignUpVerification = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const [verifyEmailByToken, { isLoading }] = useVerifyEmailMutation();
  const verifyEmail = async () => {
    try {
      const res: any = await verifyEmailByToken({
        verified_code: token,
      }).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    verifyEmail();
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={verifyImage} alt="" className="w-[500px] h-[500px]" />
      <div className="text-center">
        <h1 className="text-xl text-customPrimary font-medium">
          Wow! Your Email Is Verified Successfully.
        </h1>
        <button
          onClick={() => navigate("/signin")}
          className="bg-customPrimary text-[#fff] p-2 rounded font-bold mt-4"
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

export default SignUpVerification;
