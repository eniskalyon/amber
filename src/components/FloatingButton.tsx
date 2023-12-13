// FloatingButton.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface FloatingButtonProps {
  icon: IconType;
  link: string;
  position: string;
  backgroundColor: string;
  hoverColor: string;
  text?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  icon: Icon,
  link,
  position,
  backgroundColor,
  hoverColor,
  text
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${position} ${backgroundColor} text-white p-3 rounded-full shadow-lg ${hoverColor} transition duration-300 flex items-center justify-center`}
      // Flex container added here
    >
      <Icon size={24} />
      {text && <span className="ml-2">{text}</span>} {/* Render text if provided */}
    </a>
  );
};

export default FloatingButton;
