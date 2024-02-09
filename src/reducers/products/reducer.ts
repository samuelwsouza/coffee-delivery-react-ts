import { Reducer } from 'react'
import { CartAction, CoffeeState } from '../../contexts/CoffeeContext'
import { ActionType } from '../../reducers/products/actions'
import { produce } from 'immer'

/* 
  immer.js
  ActionsTypes no switch
  Genéricos para uma tipagem melhor
  Comentários: antes (before)
*/

export const cartReducer: Reducer<CoffeeState, CartAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      //   const existingItemIndex = state.cart.findIndex(
      //     item => item.id === action.payload.id
      //   );

      //   if (existingItemIndex !== -1) {
      //     // Se o item já existe no carrinho, atualiza a quantidade e o preço
      //     return {
      //       ...state,
      //       cart: state.cart.map((item, index) => {
      //         if (index === existingItemIndex) {
      //           return {
      //             ...item,
      //             quantity: item.quantity + action.payload.count,
      //             price: item.price + (9.90 * action.payload.count)
      //           };
      //         } else {
      //           return item;
      //         }
      //       })
      //     };
      //   } else {
      //     // Se o item não existe no carrinho, adiciona-o com a quantidade selecionada
      //     return {
      //       ...state,
      //       cart: [
      //         ...state.cart,
      //         {
      //           id: action.payload.id,
      //           title: action.payload.title,
      //           img: action.payload.img,
      //           quantity: action.payload.count,
      //           price: 9.90 * action.payload.count,
      //         }
      //       ]
      //     };
      //   }
      // }

      return produce(state, (draft) => {
        const existingItemIndex = draft.cart.findIndex(
          (item) => item.id === action.payload.id,
        )

        const quantityToAdd = action.payload.count === 0 ? 1 : action.payload.count

        if (existingItemIndex !== -1) {
          const existingItem = draft.cart[existingItemIndex]
          existingItem.quantity += quantityToAdd
          existingItem.price += 9.90 * quantityToAdd
        } else {
          draft.cart.push({
            id: action.payload.id,
            title: action.payload.title,
            img: action.payload.img,
            quantity: quantityToAdd, // Definindo a quantidade mínima como 1 unidade
            price: 9.90 * quantityToAdd, // Preço unitário
            count: quantityToAdd
          })
        }

      })
    }
    case ActionType.INCREMENT: {
      // return {
      //   ...state,
      //   cart: state.cart.map((item) =>
      //     item.id === action.payload.id
      //       ? { ...item, quantity: item.quantity + 1, price: item.price + 9.9 }
      //       : item,
      //   ),
      // }

      return produce(state, (draft) => {
        const existingItem = draft.cart.findIndex(
          (item) => item.id === action.payload.id,
        )
        if (existingItem !== -1) {
          draft.cart[existingItem].quantity += 1
          draft.cart[existingItem].price += 9.90
        }
      })
    }

    case ActionType.DECREMENT: {
      // return {
      //   ...state,
      //   cart: state.cart.map((item) =>
      //     item.id === action.payload.id
      //       ? {
      //         ...item,
      //         quantity: Math.max(1, item.quantity - 1),
      //         price: Math.max(9.9, item.price - 9.90),
      //       }
      //       : item,
      //   ),
      // }

      return produce(state, (draft) => {
        const existingItem = draft.cart.findIndex(
          (item) => item.id === action.payload.id,
        )
        if (existingItem !== -1) {
          const currentItem = draft.cart[existingItem]
          if (currentItem.quantity > 1) {
            currentItem.quantity -= 1
            currentItem.price = Math.max(9.9, currentItem.price - 9.90)
          }
        }
      })
    }


    case ActionType.REMOVE_FROM_CART:
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== action.payload.id),
      // }

      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (item) => item.id !== action.payload.id,
        )
      })

    default:
      return state
  }
}
