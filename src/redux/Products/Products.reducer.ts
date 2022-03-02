import Products, { Product } from "../../shared/Table/Table.mockdata"
import { Action } from ".."

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = Products, action: Action): Product[] {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    default:
      return state
  }
}