import React, { useEffect } from 'react';

function ChildComponent({ title, year, numbers, fetchData }) {
  console.log('CHILD COMPONENT RENDERING');
  console.log(numbers);

  useEffect(() => {
    fetchData('users');
  }, [fetchData]);

  return (
    <div className="row shadow border p-5 mt-2 m-0">
      <h2>Child Component</h2>
      <h4 className="text-danger">
        {title} - {year}
      </h4>
    </div>
  );
}

export default React.memo(ChildComponent);
