import React from "react";

interface ButtonProps {
  title: string; // Text to display on the button
  styles?: string; // Additional classes or styles
}

const Button: React.FC<ButtonProps> = ({ title, styles = "" }) => {
  return (
    <button
      className={`px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;