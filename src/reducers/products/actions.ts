export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export function incrementCoffeeAction(itemId: string) {
  return {
    type: ActionType.INCREMENT,
    payload: {
      id: itemId,
      title: '',
      img: '',
      quantity: 0,
      price: 0
    },
  }
}

export function decrementCoffeeAction(itemId: string) {
  return {
    type: ActionType.DECREMENT,
    payload: {
      id: itemId,
      title: '',
      img: '',
      quantity: 0,
      price: 0
    },
  }
}

export function removeCoffeeAction(itemId: string) {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: {
      id: itemId,
      title: '',
      img: '',
      quantity: 0,
      price: 0
    },
  }
}

/* 
I'm not using right now the short way to dispatch
Example: dispatch(removeCoffeeAction()) in Checkout.tsx
I'm using

    const handleRemoveCoffee = (itemId: string) => {
      dispatch({
        type: ActionType.REMOVE_FROM_CART,
        payload: {
          id: itemId,
          title: '',
          img: '',
          quantity: 0,
          price: 0
        },
    })
  }
*/ 