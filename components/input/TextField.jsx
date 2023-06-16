import React from "react";

function TextField({ parentProps, label, error, required, ...arg }) {
  return (
    <div {...parentProps}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="mt-1">
        <input
          className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          {...arg}
        />
        {error && <small className="font-base text-red-600">{error}</small>}
      </div>
    </div>
  );
  {
  }
}

export default TextField;
