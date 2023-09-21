import React from "react";
import { useLocation } from "react-router-dom";

function UserProfile() {
  let { state: userInfo } = useLocation();

  return (
    <section className="text-gray-400 h-screen bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col text-center items-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                  {userInfo?.name}
                </h2>
                <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-400">ID: {userInfo?.id}</p>
                <p className="text-base text-gray-400">
                  Username: {userInfo?.username}
                </p>
                <p className="text-base text-gray-400">{userInfo?.email}</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h2 className="font-medium title-font mt-4 mb-4 text-white text-lg">
                Contact Info.
              </h2>
              <p className="leading-relaxed text-lg mb-4">
                Phone: {userInfo?.phone}
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Company: {userInfo?.company?.name}
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Street: {userInfo?.address?.street}
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Suite: {userInfo?.address?.suite}
              </p>
              <p className="leading-relaxed text-lg mb-4">
                City: {userInfo?.address?.city}
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Zipcode: {userInfo?.address?.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
