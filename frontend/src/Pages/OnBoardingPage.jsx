import React, { useState } from "react";
import { useAuth } from "../Context/authContext";

const OnBoardingPage = () => {
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({
    userName: currentUser?.username || "",
    bio: currentUser?.bio || "",
    avatar: currentUser?.avatar || "",
  });
  const [isPending,setIsPending] = useState(false)

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData((preV) => ({
      ...preV,
      [name]: value,
    }));
  };

  const handleChangeAvatar = () => {
    const index = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${index}`;
    setFormData((prev) => ({
      ...prev,
      avatar: randomAvatar,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
  };

  return (
    <div className="flex flex-col justify-center items-center bg-base-100 p-10">
      <div className="card max-w-3xl bg-base-200 shadow-xl card-bordered border-primary/25">
        <div className="card-body p-6 sm:p-8">
          <h1 className="font-bold text-2xl text-gray-200 text-center">
            Complete Your Profile
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6 form-control">
            <div className="flex flex-col items-center justify-center space-y-4">
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt="Profile"
                  className="w-20 h-20 overflow-hidden rounded-full object-cover"
                />
              ) : (
                <div className="flex justify-center items-center h-full">
                  <Camera className="w-20 h-20 text-base-content opacity-40 rounded-full border border-primary p-2" />
                </div>
              )}
              <button
                className="btn btn-secondary btn-outline"
                onClick={handleChangeAvatar}
              >
                <Shuffle /> Generat Random Avatar
              </button>
              <div className="space-y-7"></div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <label htmlFor="userName" className="text-xs label-text">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                required
                value={formData.userName}
                onChange={handleChange}
                placeholder="JohnDoe"
                className="input input-secondary w-full rounded focus:outline-none "
              />
            </div>
            <div>
              <label htmlFor="bio" className="label-text text-xs">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                required
                placeholder="Write a short Bio..."
                className="textarea textarea-secondary w-full text-sm rounded focus:outline-none"
              />
            </div>
            <button
              className="btn btn-primary w-full mt-3 mb-2"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <span className="loading loading-spinner text-secondary"></span>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <Globe className="text-xs" />
                  <p>Complete onBoarding</p>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
