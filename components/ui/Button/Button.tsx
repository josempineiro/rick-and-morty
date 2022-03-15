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
  variant?: "primary" | "secondary" | "clear" | "danger" | "tertiary";
  text?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  rightIcon?: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}

const Button = (
  {
    className,
    size = "medium",
    variant = "primary",
    text,
    icon,
    leftIcon,
    rightIcon,
    children,
    rounded,
    type = "button",
    ...props
  }: ButtonProps,
  ref: React.RefObject<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
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
      {children || text}
      {rightIcon &&
        React.cloneElement(rightIcon, { className: styles.rightIcon })}
    </button>
  );
};

export default React.forwardRef(Button);
