import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { UnityCardStyled, CoffeeCard } from './styles'
import CoffeeContext, { CoffeeVariety } from '../../../contexts/CoffeeContext'
import { createContext, useContext, useReducer } from 'react'

/*
  useReducer para o count para type: 'INCREMENT' | 'DECREMENT'
  useContext
*/

interface CoffeeUnityProps extends CoffeeVariety {
  id: string
}

const coffeeReducer = (
  state: number,
  action: { type: 'INCREMENT' | 'DECREMENT' },
) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state > 0 ? state - 1 : state
    default:
      return state
  }
}

interface CountReducer {
  count: number
}

export const CountContext = createContext({} as CountReducer)

export function CoffeeUnity({
  id,
  img,
  alt,
  category,
  description,
  title,
}: CoffeeUnityProps) {

  const [count, dispatchCounter] = useReducer(coffeeReducer, 0)

  const { addToCart } = useContext(CoffeeContext)

  const handleClick = () => {
    addToCart({
      id, title, img, quantity: 1,
      price: 0,
      count: count
    }, count)
  }

  return (
    <UnityCardStyled>
      <CoffeeCard id={id}>
        <img src={img} alt={alt} />
        <button className="category">
          <span>{category}</span>
        </button>
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="buy-it">
          <p className="price">
            <span>R$</span> <p>9,90</p>
          </p>
          <div className="actions">
            <div className="counter">
              <Minus
                weight="bold"
                color="purple"
                size={12}
                style={{ cursor: 'pointer' }}
                onClick={() => dispatchCounter({ type: 'DECREMENT' })}
              />
              <span className="number-counter">{count}</span>
              <Plus
                weight="bold"
                color="purple"
                size={12}
                style={{ cursor: 'pointer' }}
                onClick={() => dispatchCounter({ type: 'INCREMENT' })}
              />
            </div>
            <button onClick={handleClick} className="cart-card">
              <ShoppingCartSimple weight="fill" size={19} />
            </button>
          </div>
        </div>
      </CoffeeCard>
    </UnityCardStyled>
  )
}

