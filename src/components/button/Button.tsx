import React, { JSX } from "react";

import "./button.css";

interface ButtonProps {
  /** What background color to use */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick: () => void;
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
const Button = ({ primary = false, size = "medium", backgroundColor, label, onClick }: ButtonProps): JSX.Element => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      onClick={onClick}
    >
      {label}
      <style>
        {`
          button {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </button>
  );
};

const defaultProps: Partial<ButtonProps> = {
  primary: false,
  size: "medium",
  backgroundColor: "white",
};
Button.defaultProps = defaultProps;

export { Button };
export type { ButtonProps };
