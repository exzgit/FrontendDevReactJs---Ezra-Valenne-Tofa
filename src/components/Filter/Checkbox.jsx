import React from "react";

const Checkbox = ({
  label,
  checked,
  onChange,
  id,
  variant = "square",
  disabled = false,
  description,
}) => {
  const roundedClass = variant === "circle" ? "rounded-full" : "rounded-md";

  return (
    <div
      className={`flex items-start space-x-1 w-fit group ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <div className="relative flex items-center h-5 text-blue-400">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            peer h-4 w-4 cursor-pointer appearance-none border-2 border-gray-300 bg-white transition-all duration-200
            ${roundedClass}
            checked:bg-current checked:border-current
            hover:border-blue-400
            ring-none outline-none
            disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-200
          `}
        />

        <svg
          className="absolute h-3 w-3 text-white transition-all duration-300 transform scale-50 opacity-0 peer-checked:scale-100 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={id}
            className={`text-sm select-none cursor-pointer transition-colors ${
              disabled
                ? "text-gray-400"
                : "text-gray-900"
            }`}
          >
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-gray-500 leading-normal max-w-xs">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
