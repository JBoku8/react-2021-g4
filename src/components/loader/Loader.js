export function Loader({ message = 'Loading...' }) {
  return (
    <div className="row">
      <h2 className="text-danger text-center">{message}</h2>
    </div>
  );
}

export default Loader;
