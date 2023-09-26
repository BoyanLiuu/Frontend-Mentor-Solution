import React from 'react';

export default function Button({ type, children }) {
  function getBackgroudStyle(type) {
    const gradientCoverStyle =
      'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[28px]  after:bg-white after:opacity-0 hover:after:opacity-50';

    switch (type) {
      case 'one':
        return 'bg-darkBlue hover:bg-lightBlue';
      case 'two':
        return `bg-gradient-orange-pink ${gradientCoverStyle}`;
      default:
        return `bg-gradient-blue-purple ${gradientCoverStyle}`;
    }
  }
  return (
    <button
      className={`btn relative desktop:text-lg text-base ${getBackgroudStyle(
        type
      )}`}
    >
      {children}
    </button>
  );
}
