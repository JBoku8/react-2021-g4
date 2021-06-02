import { useEffect, useReducer } from 'react';
import { getCreditCards } from '../../services';

const SET_CREDIT_CARDS = 'SET_CREDIT_CARDS';
const SET_FILTER = 'SET_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const creditCardReducer = (state, action) => {
  switch (action.type) {
    case SET_CREDIT_CARDS:
      return {
        ...state,
        creditCards: action.payload,
        oldCreditCards: [...action.payload],
      };
    case SET_FILTER:
      const filtered = state.creditCards.filter((item) =>
        item.owner.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        filter: action.payload,
        creditCards: filtered,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: '',
        creditCards: [...state.oldCreditCards],
      };
    default:
      throw new Error('');
  }
};

const initialState = {
  error: null,
  creditCards: [],
  oldCreditCards: [],
  filter: '',
};

function CreditCards() {
  const [state, dispatch] = useReducer(creditCardReducer, initialState);
  const loadCreditCards = async () => {
    const creditCards = await getCreditCards({ quantity: 12 });
    dispatch({
      type: SET_CREDIT_CARDS,
      payload: creditCards,
    });
  };

  useEffect(() => {
    loadCreditCards();
  }, []);

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 2) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      });
    } else if (state.filter) {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  });

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <h2 className="text-muted">Credit Cards</h2>

        <input
          type="search"
          placeholder="search..."
          className="form-control"
          onKeyUp={onSearch}
        />
        <p className="shadow-sm col-6 p-2">
          Filtering by:
          {state.filter}
        </p>
      </div>
      <div className="row m-0 shadow pt-3 pb-5 justify-content-center">
        {state.creditCards.map((creditCard) => (
          <div
            className="card mb-2 p-3 me-1"
            key={creditCard.number}
            style={{
              maxWidth: '18rem',
            }}>
            <h2 className="card-title">{creditCard.owner}</h2>
            <div className="card-body">
              <h6 className="fs-6">
                Type:
                {creditCard.type}
              </h6>
              <h6 className="fs-6">
                Number:
                {creditCard.number}
              </h6>
              <h6 className="fs-6">
                Expiration:
                {creditCard.expiration}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreditCards;
