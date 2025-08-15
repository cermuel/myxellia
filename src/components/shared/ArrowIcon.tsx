import React from "react";

interface ArrowIconProps {
  color?: string;
}

const ArrowCircleDown = ({ color = "#14B8A6" }: ArrowIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00065 11.832C2.78065 11.832 0.167318 9.2187 0.167318 5.9987C0.167318 2.7787 2.78065 0.165365 6.00065 0.165365C9.22065 0.165365 11.834 2.7787 11.834 5.9987C11.834 9.2187 9.22065 11.832 6.00065 11.832ZM5.41732 5.9987H3.66732L6.00065 8.33203L8.33398 5.9987L6.58398 5.9987V3.66537H5.41732V5.9987Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowCircleDown;
