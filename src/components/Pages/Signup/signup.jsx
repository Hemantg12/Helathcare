import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();
  const clickhandler = (e) => {
    e.preventDefault();
    toast.error("hello");
    console.log("signed successfully");
    const updatedArray = [name, email, Username, password, confirmPassword];
    console.log(updatedArray);
    navigateTo("/Login");
    return (
      <div className="toast">
        <div className="alert alert-info">
          <span>New message arrived.</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-screen px-4">
      <div className="size-11/12">
        <img
          className=" rounded-lg shadow-lg ml-8 h-[600px] w-[900px]"
          src="https://img.freepik.com/free-psd/medical-healthcare-banner-template_23-2149000182.jpg"
          alt="Signup Banner"
        />
      </div>
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Sign Up
        </h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered input-success w-full bg-slate-300 text-stone-950 placeholder-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-info w-full bg-slate-300 text-stone-950 placeholder-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-success w-full bg-slate-300 text-stone-950 placeholder-gray-600"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-success w-full bg-slate-300 text-stone-950 placeholder-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered input-success w-full bg-slate-300 text-stone-950 placeholder-gray-600"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          onClick={clickhandler}
          className="btn btn-primary w-full py-2 text-lg font-medium"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
