import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  rounded = false,
}) => {

  const baseClass = "custom-button";
  const finalClassName = `
    ${baseClass} 
    ${rounded ? `${baseClass}--rounded` : ""} 
    ${className}
  `.trim();

  return (
    <button 
      className={finalClassName} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;