import {
  CoffeeListContainer,
  CoffeeMenu,
  NavIntrodution,
  ButtonNav,
  SpanNav,
  CoffeeUnities,
} from './styles'
import { CoffeeUnity } from '../CoffeeUnity'
import { createContext, useContext } from 'react'
import CoffeeContext from '../../../contexts/CoffeeContext'

/* 
  useContext
  coffees.map((state) => {} (mostrando em tela todos os meus cafés))
*/

interface CoffeeSelectedData {
  id: string
  title: string
  category: string
  img: string
  description: string
}

interface CoffeeContextType {
  coffees: CoffeeSelectedData[]
  handleAddCoffee: (data: CoffeeSelectedData) => void
}

export const CoffeeTypeContext = createContext({} as CoffeeContextType)

export function CoffeeList() {
  const { state } = useContext(CoffeeContext)
  const { coffees } = state
  // const { category, description, id, img, title, alt } =
  //   useContext(CoffeeContext)

  // const [coffeeState, dispatch] = useReducer(
  //   (state: CoffeeState, action: any) => {
  //     if (action.type === 'ADD_COFFEE') {
  //       return {
  //         ...state,
  //         coffees: [...state.coffees, action.payload.coffeeSelected],
  //       }
  //     }

  //     return state
  //   },
  //   {
  //     coffees: [
  //       {
  //         id: 'Expresso Tradicional',
  //         img: coffeeImageExpresso,
  //         alt: 'Expresso Tradicional',
  //         category: 'tradicional',
  //         description:
  //           'O tradicional café feito com água quente e grãos moídos',
  //         title: 'Expresso Tradicional',
  //       },
  //       {
  //         id: 'Expresso Americano',
  //         img: coffeeImageExpressoAmericano,
  //         alt: 'Expresso Americano',
  //         category: 'tradicional',
  //         description: 'Expresso diluído, menos intenso que o tradicional',
  //         title: 'Expresso Americano',
  //       },
  //       {
  //         id: 'Expresso Cremoso',
  //         img: coffeeImageExpressoCremoso,
  //         alt: 'Expresso Cremoso',
  //         category: 'tradicional',
  //         description: 'Café expresso tradicional com espuma cremosa',
  //         title: 'Expresso Cremoso',
  //       },
  //       {
  //         id: 'Expresso Gelado',
  //         img: coffeeImageExpressoGelado,
  //         alt: 'Expresso Gelado',
  //         category: 'gelado',
  //         description: 'Bebida preparada com café expresso e cubos de gelo',
  //         title: 'Expresso Gelado',
  //       },
  //       {
  //         id: '3',
  //         img: coffeeImageComLeite,
  //         alt: 'Café com Leite',
  //         category: 'com leite',
  //         description:
  //           'Meio a meio de expresso tradicional com leite vaporizado',
  //         title: 'Café com Leite',
  //       },
  //       {
  //         id: '4',
  //         img: coffeeImageLatte,
  //         alt: 'Latte',
  //         category: 'com leite',
  //         description:
  //           'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  //         title: 'Latte',
  //       },
  //       {
  //         id: '5',
  //         img: coffeeImageCapuccino,
  //         alt: 'Capuccino',
  //         category: 'com leite',
  //         description:
  //           'Bebida com canela feita de doses iguais de café, leite e espuma',
  //         title: 'Capuccino',
  //       },
  //       {
  //         id: '6',
  //         img: coffeeImageMacchiato,
  //         alt: 'Macchiato',
  //         category: 'com leite',
  //         description:
  //           'Café expresso misturado com um pouco de leite quente e espuma',
  //         title: 'Macchiato',
  //       },
  //       {
  //         id: '7',
  //         img: coffeeImageMocaccino,
  //         alt: 'Mocaccino',
  //         category: 'com leite',
  //         description:
  //           'Café expresso com calda de chocolate, pouco leite e espuma',
  //         title: 'Mocaccino',
  //       },
  //       {
  //         id: '8',
  //         img: coffeeImageChocolateQuente,
  //         alt: 'Chocolate Quente',
  //         category: 'especial',
  //         description:
  //           'Bebida feita com chocolate dissolvido no leite quente e café',
  //         title: 'Chocolate Quente',
  //       },
  //       {
  //         id: '9',
  //         img: coffeeImageCubano,
  //         alt: 'Cubano',
  //         category: 'alcoólico',
  //         description:
  //           'Drink gelado de café expresso com rum, creme de leite e hortelã',
  //         title: 'Cubano',
  //       },
  //       {
  //         id: '10',
  //         img: coffeeImageHavaiano,
  //         alt: 'Havaiano',
  //         category: 'especial',
  //         description: 'Bebida adocicada preparada com café e leite de coco',
  //         title: 'Havaiano',
  //       },
  //       {
  //         id: '11',
  //         img: coffeeImageArabe,
  //         alt: 'Árabe',
  //         category: 'especial',
  //         description: 'Bebida preparada com grãos de café árabe e especiarias',
  //         title: 'Árabe',
  //       },
  //       {
  //         id: '12',
  //         img: coffeeImageIrlandes,
  //         alt: 'Irlandês',
  //         category: 'alcoólico',
  //         description:
  //           'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  //         title: 'Irlandês',
  //       },
  //     ],
  //   },
  // )

  // const { coffees } = coffeeState

  return (
    <CoffeeMenu>
      <NavIntrodution>
        <h1>Nossos cafés</h1>

        <div className="filtered-categories">
          <ButtonNav>
            <SpanNav>tradicional</SpanNav>
          </ButtonNav>
          <ButtonNav>
            <SpanNav>especial</SpanNav>
          </ButtonNav>
          <ButtonNav>
            <SpanNav>com leite</SpanNav>
          </ButtonNav>
          <ButtonNav>
            <SpanNav>alcoólico</SpanNav>
          </ButtonNav>
          <ButtonNav>
            <SpanNav>gelado</SpanNav>
          </ButtonNav>
        </div>
      </NavIntrodution>

      <CoffeeListContainer>
        <CoffeeUnities>
          {coffees.map((state) => {
            return (
              <CoffeeUnity
                key={state.id}
                category={state.category}
                description={state.description}
                img={state.img}
                title={state.title}
                id={state.id}
              />
            )
          })}
        </CoffeeUnities>
      </CoffeeListContainer>
    </CoffeeMenu>
  )
}
