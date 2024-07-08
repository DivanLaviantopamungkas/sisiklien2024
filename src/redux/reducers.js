import { combineReducers } from 'redux';
import {
  ADD_CARD,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
} from './actions';

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case FETCH_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cards: cardReducer,
});

export default rootReducer;
