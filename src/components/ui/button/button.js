const Button = ({ type = 'button', className, onClick, text }) => (
  <div className="mb-3">
    {/* eslint-disable-next-line */}
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Button;
