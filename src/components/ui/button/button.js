const Button = ({ type, className, onClick, text }) => {
  return (
    <div className="mb-3">
      <button type={type} className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
