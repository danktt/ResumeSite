interface ButtonProps {
  title: string;
  onClick?: () => void;
  className: string;
  type: "button" | "submit" | "reset";
}

export default function Button({
  title,
  onClick,
  className,
  type,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn btn-outline ${className} `}
    >
      {title}
    </button>
  );
}
