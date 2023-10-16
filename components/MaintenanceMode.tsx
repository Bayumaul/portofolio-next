import React from "react";

const MaintenanceMode: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="xl:w-1/2 flex-1 flex flex-col items-center justify-center text-center px-4 lg:px-0">
        <p className="text-4xl font-bold text-gray-700 dark:text-white capitalize tracking-wide mt-8">
          Website under maintenance!
        </p>
        <p className="text-xl text-gray-700 dark:text-white uppercase mt-4">
          We'll be back soon
        </p>
      </div>
      <div className="w-full py-4 border-t border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
          <span className="font-bold dark:text-white">You can contact us:</span>

          <a
            href="#"
            className="flex items-center space-x-1"
            target="_blank"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="dark:text-white">
              bayu.maulanaikhsan123@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceMode;
