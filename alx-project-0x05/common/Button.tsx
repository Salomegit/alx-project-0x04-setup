import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  return (
    <button
      style={{
        backgroundColor: buttonBackgroundColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
