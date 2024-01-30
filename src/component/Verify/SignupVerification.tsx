import { useNavigate } from "react-router-dom";
import verifyImage from "../../assets/verify.svg";
const SignUpVerification = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={verifyImage} alt="" className="w-[500px] h-[500px]" />
      <div className="text-center">
        <h1 className="text-xl text-customPrimary font-medium">
          {" "}
          Wow! Your Email Is Verified Successfully
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
