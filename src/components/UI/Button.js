import React from 'react';

const Button = ({
  children, // Content of the button
  onClick, // Click handler
  type = 'button', // Default to 'button', can be 'submit'
  variant = 'primary', // 'primary' (green), 'secondary' (blue), 'warning' (red on white), 'link' (text-like)
  disabled = false, // Is the button disabled?
  className = '', // Allow custom classes to be passed
  size = 'medium', // 'small', 'medium', 'large'
  href, // If provided, render as an anchor tag
  ...props // Allow passing other props like aria-label, etc.
}) => {

  // Base styles for all buttons
  const baseStyles = 
    'inline-flex items-center justify-center font-bold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap';

  // Size specific styles
  const sizeStyles = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-3 px-6 text-base', // Default size
    large: 'py-4 px-8 text-lg'
  };

  // Variant specific styles
  const variantStyles = {
    primary: 
      'bg-safety-green text-trust-blue hover:bg-safety-green-light focus:ring-safety-green',
    secondary: 
      'bg-trust-blue text-white hover:bg-trust-blue-dark focus:ring-trust-blue',
    warning: 
      'bg-white text-warning-red border border-warning-red hover:bg-red-50 focus:ring-warning-red', // Example for the warning banner button
    link: 
      'bg-transparent text-trust-blue hover:underline focus:ring-trust-blue px-0 py-1', // Text-like button
  };

  // Disabled state styles
  const disabledStyles =
    'disabled:opacity-50 disabled:cursor-not-allowed';

  // Combine all styles
  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabledStyles}
    ${className} 
  `.replace(/\s+/g, ' ').trim(); // Clean up extra whitespace

  // Determine the tag type
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      type={Tag === 'button' ? type : undefined} // Only set type for button elements
      href={href} // Set href for anchor tags
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props} // Spread remaining props
    >
      {children}
    </Tag>
  );
};

export default Button; 