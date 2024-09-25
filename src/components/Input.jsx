import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-2 border-b-2 rounded-md border-blue-300 bg-white text-gray-800 focus:outline-none focus:border-blue-600";

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold text-gray-700 uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className={`${classes} resize-none h-24`} // Adjust height for textarea
          {...props}
        />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
