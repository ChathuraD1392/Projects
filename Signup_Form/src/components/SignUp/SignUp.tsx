import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { BsPassFill } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import "./SignUp.css";
const SignUp = () => {
  const [accountStatus, setAccountStatus] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const handleLoginStatus = () => {
    setAccountStatus(!accountStatus);
  };

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="container">
          <div className="header">
            <h2>{!accountStatus ? "SignUp" : "LogIn"}</h2>
            <div className="underline"></div>
          </div>
          <div className="inputBox">
            {!accountStatus ? (
              <div className="inputCover">
                <GoPeople />
                <input {...register("name")} placeholder="Name" type="text" />
              </div>
            ) : (
              <div></div>
            )}
            <div className="inputCover">
              <MdEmail />
              <input {...register("email")} placeholder="Email" type="email" />
            </div>
            <div className="inputCover">
              <BsPassFill />
              <input
                {...register("password")}
                placeholder="Password"
                type="password"
              />
            </div>
          </div>
          <div className="footer">
            <div className="btnBox">
              <button onClick={() => reset()} className="reset">
                Reset
              </button>
              <button className="login" type="submit">
                {!accountStatus ? "SignUp" : "LogIn"}
              </button>
            </div>
            {!accountStatus ? (
              <p>
                Already have an Account?{" "}
                <span onClick={handleLoginStatus}>Login Here</span>
              </p>
            ) : (
              <p>
                Don't have an Account?{" "}
                <span onClick={handleLoginStatus}>Register Here</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
