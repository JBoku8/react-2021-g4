import { useEffect, useMemo, useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

// oldObject !== newObject == true

function ParentComponent() {
  const [value, setValue] = useState(0);
  const numbers = useMemo(() => [1, 2, 3, 4, 5], []);

  const fetchData = useCallback((endpoint) => {
    fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetchData('todos');
  }, []);

  return (
    <div className="row">
      <h2>Parent Component - {value}</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setValue((v) => v + 1)}>
        Add Number
      </button>
      <ChildComponent
        title="child component title"
        year={2021}
        numbers={numbers}
        fetchData={fetchData}
      />
    </div>
  );
}

export default ParentComponent;
