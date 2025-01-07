const StackIcon = ({ isVisible, svgPath, color }) => {
    if (!isVisible) return null;
  
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={svgPath} fill={color} />
      </svg>
    );
  };
  
  export default StackIcon;
  