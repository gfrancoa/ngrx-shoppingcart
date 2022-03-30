import {
  ShoppingAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
  {
    id: '643524135465',
    name: 'Diet Coke',
  },
];

export function ShoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];

    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter((e) => e.id != action.payload);

    default:
      return state;
  }
}
