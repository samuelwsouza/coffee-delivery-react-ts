import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeBackground from '../../assets/intro-coffee-background.svg'
import {
  IntroCoffee,
  CoffeeContainer,
  CoffeeApresentation,
  CoffeeRebrandedItems,
  CoffeeItem,
  CoffeeBackground,
} from './styles'
import { CoffeeList } from './CoffeeList'

export function Home() {
  return (
    <>
      <IntroCoffee>
        <CoffeeContainer>
          <CoffeeApresentation>
            <h1>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </p>
          </CoffeeApresentation>

          <CoffeeRebrandedItems>
            <CoffeeItem>
              <button className="shopping-cart">
                <ShoppingCart weight="fill" size={17} />
              </button>
              <p>Compra simples e segura</p>
            </CoffeeItem>
            <CoffeeItem>
              <button className="package-icon">
                <Package weight="fill" size={17} />
              </button>
              <p>Embalagem mantém o café intacto</p>
            </CoffeeItem>
            <CoffeeItem>
              <button className="timer-icon">
                <Timer weight="fill" size={17} />
              </button>
              <p>Entrega rápida e rastreada</p>
            </CoffeeItem>
            <CoffeeItem>
              <button className="coffee-icon">
                <Coffee weight="fill" size={17} />
              </button>
              <p>O café chega fresquinho até você</p>
            </CoffeeItem>
          </CoffeeRebrandedItems>

          <CoffeeBackground>
            <img src={coffeeBackground} alt="Imagem de café brasileiro" />
          </CoffeeBackground>
        </CoffeeContainer>
      </IntroCoffee>

      <CoffeeList />
    </>
  )
}
