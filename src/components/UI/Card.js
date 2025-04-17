import React from 'react';

/**
 * A reusable Card component with common styling.
 * @param {React.ReactNode} children - Content to display inside the card.
 * @param {string} [className] - Additional Tailwind classes to apply to the card.
 * @param {'white' | 'light-gray'} [bg='white'] - Background color variant.
 * @param {string} [accentBorder] - Optional Tailwind border class (e.g., 'border-t-4 border-safety-green').
 * @param {object} props - Other props to pass to the div element.
 */
const Card = ({
  children,
  className = '',
  bg = 'white',
  accentBorder = '', // e.g., 'border-t-4 border-safety-green'
  ...props
}) => {

  const baseStyles =
    'p-6 rounded-lg shadow-md';

  const bgStyles = {
    'white': 'bg-white',
    'light-gray': 'bg-light-gray',
  };

  const combinedClassName = `
    ${baseStyles}
    ${bgStyles[bg]}
    ${accentBorder}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card; 