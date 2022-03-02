import Products from "../../shared/Table/Table.mockdata"
import { Action } from ".."

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = Products, action: Action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return [...action.payload]
    case 'INSERT_NEW_PRODUCT':
      return [...state, {
        ...action.payload,
        _id: String(state.length +1)
      }]
    default:
      return state
  }
}