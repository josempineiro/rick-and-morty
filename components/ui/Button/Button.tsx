import classNames from "classnames";
import * as React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  rounded?: boolean;
  size?: "tiny" | "small" | "medium" | "large" | "huge";
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  rightIcon?: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}

function Button({
  className,
  size,
  variant,
  icon,
  leftIcon,
  rightIcon,
  children,
  rounded,
  type,
  ...props
}: ButtonProps) {
  console.log({
    [styles[size]]: true,
    [styles[variant]]: true,
    [styles.rounded]: Boolean(rounded),
  });
  return (
    <button
      className={classNames(className, styles.button, {
        [styles[size]]: true,
        [styles[variant]]: true,
        [styles.rounded]: Boolean(rounded),
        [styles.iconButton]: Boolean(icon),
      })}
      {...props}
    >
      {leftIcon && React.cloneElement(leftIcon, { className: styles.leftIcon })}
      {icon && React.cloneElement(icon, { className: styles.icon })}
      {children}
      {rightIcon &&
        React.cloneElement(rightIcon, { className: styles.rightIcon })}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  size: "medium",
  variant: "primary",
};

export default Button;
