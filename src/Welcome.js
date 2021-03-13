function Welcome(props) {
  const styles = {
    color: props.color,
  };
  return (
    <div>
      <h1 style={styles}>{props.message}</h1>
    </div>
  );
}

export default Welcome;
