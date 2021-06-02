import { useDispatch, useSelector } from 'react-redux';
import {
  addNumberAction,
  resetNumberAction,
  subtractNumberAction,
} from '../../redux/actions';

import { messageSelector, counterSelector } from '../../redux/selectors';

function ReduxCounter() {
  const dispatch = useDispatch();
  const message = useSelector(messageSelector);
  const counter = useSelector(counterSelector);

  return (
    <div className="row">
      <div className="col-12 mb-3">
        <h2 className="text-white">Redux Counter</h2>
        <h4 className="text-white">{message}</h4>
      </div>

      <div className="col-12 d-grid gap-1">
        <h2 className="text-white">{counter}</h2>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(addNumberAction(10))}>
          Add Number - Action
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(subtractNumberAction(10))}>
          Subtract Number - Action
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(resetNumberAction())}>
          Reset Number - Action
        </button>

        <button
          className="btn btn-danger"
          type="button"
          onClick={() =>
            dispatch({
              type: 'INVALID_ACTION',
            })
          }>
          Invalid Action - Action
        </button>
      </div>
    </div>
  );
}

export default ReduxCounter;
