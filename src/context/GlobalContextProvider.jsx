import { createContext, useReducer } from "react"

export const GlobalContext = createContext()

// initial state
const initialState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
}

// switch function
const reduce = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case "ADD_TO_CART":
      return {...state, cart: [...state.cart, payload]};
    case "DELETE":
      return {...state, cart: state.cart.filter((item) => item.id !== payload)};
    case "INCRESE":
      return {...state, cart: state.cart.map((item) => {
        if (item.id == payload) {
          return {...item, amount: item.amount + 1}
        } else {
          return item;
        }
      })};
      case "DECRESE": 
       return {...state, cart: state.cart.map((item) => {
        if (item.id == payload) {
          return {...item, amount: item.amount - 1}
        } else {
          return item
        }
       })}
    default: state;
  }
}

export function GlobalContextProvider({children}) {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <GlobalContext.Provider value={{...state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}