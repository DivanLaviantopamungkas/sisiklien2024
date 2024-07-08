export const ADD_CARD = 'ADD_CARD';
export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const addCard = (nama, nim) => ({
  type: ADD_CARD,
  payload: { nama, nim },
});

export const fetchCardsRequest = () => ({
  type: FETCH_CARDS_REQUEST,
});

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cards,
});

export const fetchCardsFailure = (error) => ({
  type: FETCH_CARDS_FAILURE,
  payload: error,
});

export const fetchCards = () => {
  return (dispatch) => {
    dispatch(fetchCardsRequest());
    fetch('http://localhost:5000/cards')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => dispatch(fetchCardsSuccess(data)))
      .catch((error) => dispatch(fetchCardsFailure(error.message)));
  };
};
