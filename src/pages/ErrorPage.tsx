import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

interface RouterError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouterError;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow rounded-xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Oops!</h2>
          <p className="mt-2 text-sm text-gray-600">
            {error.statusText ||
              error.message ||
              "An unexpected error occurred"}
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => navigate("/")}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
