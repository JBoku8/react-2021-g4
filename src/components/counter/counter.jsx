import { useState, useEffect } from "react";
import Greeting from "../greeting";

import Button from "../ui/button";
// import { Button } from "../ui";

import "./counter.css";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    console.log("მუდმივი ფუნქცია, კომპონენტის დახატვისას");
  });

  // componentDidMount
  useEffect(() => {
    // AJAX calls
    console.log("კომპონენტის დახატვისას ერთხელ");
  }, []);

  useEffect(() => {
    console.log("count ცვლადის ცვლილებისას");
    setShowGreeting(count < 15 && count > -15);
  }, [count, setShowGreeting]);

  useEffect(() => {
    console.log("SHOW GREETING");
  }, [showGreeting]);

  const onButtonClick = ({ target }) => {
    // oldValue !== newValue
    // oldObject !== newObject
    setCount(0);
  };

  const valueLimit = (
    <div className="row">
      <h3 className="text-danger">VALUE_LIMIT</h3>
    </div>
  );

  return (
    <div className="row counter-container">
      {showGreeting ? (
        <Greeting title="Counter" description={count} />
      ) : (
        valueLimit
      )}
      <div className="col-12 d-flex">
        <Button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setCount(count + 1)}
          text="+1"
        />

        <Button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setCount(count + 5)}
          text="+5"
        />

        <Button
          type="button"
          className="btn btn-outline-success"
          onClick={onButtonClick}
          text="Reset Counter"
        />

        <Button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => setCount(count - 5)}
          text="-5"
        />

        <Button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => setCount(count - 1)}
          text="-1"
        />
      </div>
    </div>
  );
}

export default Counter;
