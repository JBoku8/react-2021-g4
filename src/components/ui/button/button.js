const Button = ({ type, className, onClick, text }) => (
  <div className="mb-3">
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;
