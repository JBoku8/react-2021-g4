const Button = ({
  type = 'button',
  className = 'btn btn-primary',
  onClick,
  text = 'N/A',
}) => (
  <div className="mb-3">
    {/* eslint-disable-next-line */}
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;
