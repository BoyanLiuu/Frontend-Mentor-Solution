import React from 'react';

const Feature = ({ title, content, className }) => {
  console.log(className);
  return (
    <div className={`${className}`}>
      <h2>{title}</h2>
      <p>{content}</p>
      <span>LEARN MORE</span>
    </div>
  );
};

export default Feature;
