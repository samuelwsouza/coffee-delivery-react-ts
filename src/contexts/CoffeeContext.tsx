import { Dispatch, ReactNode, createContext, useEffect, useReducer } from 'react'
import { ActionType } from '../reducers/products/actions'
import coffeeImageExpresso from '../assets/coffee_expresso.svg'
import coffeeImageExpressoAmericano from '../assets/coffee_americano.svg'
import coffeeImageExpressoCremoso from '../assets/coffee_expressocremoso.svg'
import coffeeImageExpressoGelado from '../assets/coffee_gelado.svg'
import coffeeImageComLeite from '../assets/coffee_comleite.svg'
import coffeeImageLatte from '../assets/coffee_latte.svg'
import coffeeImageCapuccino from '../assets/coffee_capuccino.svg'
import coffeeImageMacchiato from '../assets/coffee_macchiato.svg'
import coffeeImageMocaccino from '../assets/coffee_mocchaccino.svg'
import coffeeImageChocolateQuente from '../assets/chocolate_quente.svg'
import coffeeImageCubano from '../assets/coffee_cubano.svg'
import coffeeImageHavaiano from '../assets/coffee_havaiano.svg'
import coffeeImageArabe from '../assets/coffee_arabe.svg'
import coffeeImageIrlandes from '../assets/coffee_irlandes.svg'
import { cartReducer } from '../reducers/products/reducer'

/*
  Aqui eu aprendi
  useReducer
  useEffect
  localStorage no useReducer e fora no useEffect
  Context.Provider
*/

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeVariety {
  id: string
  img: string
  alt?: string | undefined
  category: string
  title: string
  description: string
  price: number
}

interface CartItem {
  id: string
  title: string
  img: string
  quantity: number
  price: number
  count: number
}

export interface CartAction {
  type: ActionType
  payload: CartItem
}

export interface CoffeeState {
  coffees: CoffeeVariety[]
  cart: CartItem[]
}

interface CoffeeContextType {
  state: CoffeeState
  dispatch: Dispatch<CartAction>
  addToCart: (data: CartItem, count?: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, {
    coffees: [
      {
        id: 'Expresso Tradicional',
        img: coffeeImageExpresso,
        alt: 'Expresso Tradicional',
        category: 'tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        title: 'Expresso Tradicional',
        price: 9.90
      },
      {
        id: 'Expresso Americano',
        img: coffeeImageExpressoAmericano,
        alt: 'Expresso Americano',
        category: 'tradicional',
        description: 'Expresso diluído, menos intenso que o tradicional',
        title: 'Expresso Americano',
        price: 9.90
      },
      {
        id: 'Expresso Cremoso',
        img: coffeeImageExpressoCremoso,
        alt: 'Expresso Cremoso',
        category: 'tradicional',
        description: 'Café expresso tradicional com espuma cremosa',
        title: 'Expresso Cremoso',
        price: 9.90
      },
      {
        id: 'Expresso Gelado',
        img: coffeeImageExpressoGelado,
        alt: 'Expresso Gelado',
        category: 'gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        title: 'Expresso Gelado',
        price: 9.90
      },
      {
        id: '3',
        img: coffeeImageComLeite,
        alt: 'Café com Leite',
        category: 'com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        title: 'Café com Leite',
        price: 9.90
      },
      {
        id: '4',
        img: coffeeImageLatte,
        alt: 'Latte',
        category: 'com leite',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        title: 'Latte',
        price: 9.90
      },
      {
        id: '5',
        img: coffeeImageCapuccino,
        alt: 'Capuccino',
        category: 'com leite',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        title: 'Capuccino',
        price: 9.90
      },
      {
        id: '6',
        img: coffeeImageMacchiato,
        alt: 'Macchiato',
        category: 'com leite',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        title: 'Macchiato',
        price: 9.90
      },
      {
        id: '7',
        img: coffeeImageMocaccino,
        alt: 'Mocaccino',
        category: 'com leite',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        title: 'Mocaccino',
        price: 9.90
      },
      {
        id: '8',
        img: coffeeImageChocolateQuente,
        alt: 'Chocolate Quente',
        category: 'especial',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        title: 'Chocolate Quente',
        price: 12.90
      },
      {
        id: '9',
        img: coffeeImageCubano,
        alt: 'Cubano',
        category: 'alcoólico',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        title: 'Cubano',
        price: 15.90
      },
      {
        id: '10',
        img: coffeeImageHavaiano,
        alt: 'Havaiano',
        category: 'especial',
        description: 'Bebida adocicada preparada com café e leite de coco',
        title: 'Havaiano',
        price: 12.90
      },
      {
        id: '11',
        img: coffeeImageArabe,
        alt: 'Árabe',
        category: 'especial',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        title: 'Árabe',
        price: 12.90
      },
      {
        id: '12',
        img: coffeeImageIrlandes,
        alt: 'Irlandês',
        category: 'alcoólico',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        title: 'Irlandês',
        price: 15.90
      },
    ],
    cart: [],
  }, (initialState) => {
    const storagedStateAsJSON = localStorage.getItem('@coffee-delivery: coffees-state-1.0.0')

    if (storagedStateAsJSON) {
      return JSON.parse(storagedStateAsJSON)
    }

    return initialState

  })

  useEffect(() => {
    const stateJSON = JSON.stringify(state)
    localStorage.setItem('@coffee-delivery: coffees-state-1.0.0', stateJSON)
  }, [state])

  // function addToCart(data: CartItem) {
  //   // const id = String(new Date().getTime())
  //   // const img = String(data.img)
  //   // const title = data.title
  //   // const quantity = data.quantity

  //   // const coffeeSelected = {
  //   //   id,
  //   //   img,
  //   //   title,
  //   //   quantity,
  //   // }

  //   dispatch({
  //     type: ActionType.ADD_TO_CART,
  //     payload: data,
  //   })
  // }

  // const addToCart = (coffee: CartItem, count: number = 1) => {
  //   dispatch({
  //     type: ActionType.ADD_TO_CART,
  //     payload: {
  //       id: coffee.id,
  //       title: coffee.title,
  //       img: coffee.img,
  //       quantity: coffee.quantity,
  //       count: count,
  //       price: 9.90,
  //     },
  //   })
  // }

  return (
    <CoffeeContext.Provider
      value={{
        state,
        dispatch,
        addToCart: (data: CartItem, count: number = 1) => {
          dispatch({
            type: ActionType.ADD_TO_CART,
            payload: {
              id: data.id,
              title: data.title,
              img: data.img,
              quantity: count,
              count: count,
              price: data.price,
            },
          })
        }
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export default CoffeeContext