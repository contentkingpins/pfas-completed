import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'warning';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  // Determine size class
  const sizeClass = {
    small: 'text-sm py-2 px-4',
    medium: 'py-3 px-6',
    large: 'text-lg py-4 px-8',
  }[size];

  // Common classes
  const baseClasses = `btn btn-${variant} ${sizeClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  // If href is provided, render as link
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 