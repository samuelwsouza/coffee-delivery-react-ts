import {
  CheckoutAddress,
  CheckoutAdjustment,
  CheckoutBox,
  CheckoutPayment,
  CoffeeSelected,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { Divider } from '../../components/Divider'
import { NavLink } from 'react-router-dom'
import { createContext, useContext } from 'react'
import CoffeeContext from '../../contexts/CoffeeContext'
import { ActionType } from '../../reducers/products/actions'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormWrapperData } from '../../contexts/FormProviderWrapper'

/*
  Aqui eu aprendi
  Zod
  useContext
  handleSubmit(handleDeliverySended)() chamada imediata
*/

export type ClientProps = zod.infer<typeof saveAddressClientSchema>

const saveAddressClientSchema = zod.object({
  codigopostal: zod.number().min(0o000000).max(99999999),
  ruaresidencial: zod.string().min(1, { message: 'Informe sua Rua | Avenida' }),
  numeroresidencial: zod.number().min(1).max(10000),
  extrainfoap: zod.number().min(1).optional().or(zod.literal('')),
  bairroresidencial: zod.string().min(1, { message: 'Informe o bairro residencial' }),
  cidadecliente: zod.string().min(1, { message: 'Informe sua cidade' }),
  siglacidade: zod.string().min(1, { message: 'Informe seu UF' }),
})

export const InfoUserDelivery = createContext({} as ClientProps)

export function Checkout() {



  const { state, dispatch } = useContext(CoffeeContext)
  const { setFormData, selectedPayment, setSelectedPayment } = useContext(FormWrapperData)


  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod)
  }

  function formatingValues(valor: any) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  function calcularTotalItems() {
    return formatingValues(state.cart.reduce((total, item) => total + item.price, 0))
  }

  function allMyItems() {
    const totalItems = state.cart.reduce((total, item) => total + item.price, 0)
    const frete = 3.5

    return formatingValues(totalItems + frete)
  }

  function freteAvailable() {
    if (state.cart.length > 0) {
      return <p>R$ 3,50</p>
    } else {
      return <p>R$ 0</p>
    }
  }

  const handleIncrementCoffee = (itemId: string) => {
    dispatch({
      type: ActionType.INCREMENT,
      payload: {
        id: itemId,
        title: '',
        img: '',
        count: 0,
        quantity: 0,
        price: 0
      },
    })
  }

  const handleDecrementCoffee = (itemId: string) => {
    dispatch({
      type: ActionType.DECREMENT,
      payload: {
        id: itemId,
        title: '',
        img: '',
        quantity: 0,
        price: 0,
        count: 0
      },
    })
  }

  const handleRemoveCoffee = (itemId: string) => {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: {
        id: itemId,
        title: '',
        img: '',
        quantity: 0,
        price: 0,
        count: 0
      },
    })
  }

  const newUserForm = useForm<ClientProps>({
    resolver: zodResolver(saveAddressClientSchema),
    defaultValues: {
      bairroresidencial: '',
      cidadecliente: '',
      ruaresidencial: '',
      siglacidade: '',
    }
  })

  const { register, handleSubmit, watch } = newUserForm

  // console.log(formState.errors)

  const handleDeliverySended = (data: any) => {
    setFormData(data)
  }

  const watching = watch([
    'codigopostal',
    'ruaresidencial',
    'numeroresidencial',
    'extrainfoap',
    'bairroresidencial',
    'cidadecliente',
    'siglacidade',
  ])

  const isMySubmitButtonDisabled = Object.values(watching).some((value) => !value)

  console.log(state.cart)

  return (
    <CheckoutAdjustment>
      <CheckoutBox>
        <CheckoutAddress>
          <div className="top-box-address">
            <MapPinLine size={22} color="orange" />
            <h4>Endereço de Entrega</h4>
          </div>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <form onSubmit={handleSubmit(handleDeliverySended)} id="info-client" className="address-user">
            <input className="cep" type="number" placeholder="CEP" required {...register('codigopostal', { valueAsNumber: true, maxLength: 8 })} />{' '}
            <br />
            <input
              className="streetname"
              type="text"
              placeholder="Rua"
              required
              {...register('ruaresidencial')}
            />{' '}
            <br />
            <div className="info">
              <input
                className="numberhouse"
                type="number"
                placeholder="Número"
                {...register('numeroresidencial', { valueAsNumber: true })}
                required
              />
              <input
                className="complemento-opcional"
                placeholder="Complemento"
                type="number"
                {...register('extrainfoap', { valueAsNumber: true })}
              />
            </div>
            <br />
            <div className="info">
              <input
                className="neighborhood"
                type="text"
                placeholder="Bairro"
                {...register('bairroresidencial')}
                required
              />
              <input
                className="city"
                type="text"
                placeholder="Cidade"
                {...register('cidadecliente')}
                required
              />
              <input className="sigla" type="text" placeholder="UF" {...register('siglacidade', { maxLength: 2 })} required />
            </div>
          </form>
        </CheckoutAddress>

        <CheckoutPayment>
          <div className="top-box-pay">
            <CurrencyDollar size={21} color="purple" />
            <h4>Pagamento</h4>
          </div>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="select-pay-mode">
            <button id='credit-card' value='CartaoCredito' aria-pressed={selectedPayment === 'Cartão de Credito'}
              onClick={() => handlePaymentSelect('Cartão de Crédito')}>
              {' '}
              <CreditCard size={18} color="purple" /> cartão de crédito
            </button>
            <button id="debit-card" value='CartaoDebito' aria-pressed={selectedPayment === 'Cartão de Débito'}
              onClick={() => handlePaymentSelect('Cartão de Débito')}>
              {' '}
              <Bank size={18} color="purple" /> cartão de débito
            </button>
            <button id='money-paper' value='Dinheiro' aria-pressed={selectedPayment === 'Dinheiro'}
              onClick={() => handlePaymentSelect('Dinheiro')} autoFocus>
              {' '}
              <Money size={18} color="purple" />
              dinheiro
            </button>
          </div>

        </CheckoutPayment>
      </CheckoutBox>

      <CoffeeSelected>
        {state.cart.length === 0 && (
          <div className="cart-empty">Nada de produtos aqui</div>
        )}

        {state.cart.map((item) => (
          <div key={item.id} className="coffee-card-selected">
            <div className="info">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <div className="counter">
                <Minus
                  weight="bold"
                  color="purple"
                  size={12}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDecrementCoffee(item.id)}
                />
                <span className="number-counter">{item.quantity}</span>
                <Plus
                  weight="bold"
                  color="purple"
                  size={12}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleIncrementCoffee(item.id)}
                />
              </div>
              <button onClick={() => handleRemoveCoffee(item.id)}>
                <Trash size={18} color="purple" />
                remover
              </button>
            </div>
            <p className="preco-do-item">R$ 9,90</p>
          </div>
        ))}

        <Divider />

        <div className="valores">
          <div className="total-items-sum">
            <p className="title-total-items">Total de itens</p>

            <p className="valor-total-items">{calcularTotalItems()}</p>
          </div>
          <div className="frete-preco">
            <p className="title-entrega">Entrega</p>

            <p className="valor-entrega">{freteAvailable()}</p>
          </div>

          <div className="total">
            <h4 className="title-total-all-items">Total</h4>

            <h4 className="total-all">
              {state.cart.length === 0 ? (
                <h4 className="total-all">R$ 0</h4>
              ) : (
                formatingValues(allMyItems())
              )}
            </h4>
          </div>
        </div>

        <div className="button-environment-confirm">
          <NavLink to="/success">
            <button onClick={() => {
              handleSubmit(handleDeliverySended)()
            }} form="info-client" className="confirm-pay-coffee" type="submit" disabled={isMySubmitButtonDisabled}>
              confirmar pedido
            </button>
          </NavLink>
        </div>
      </CoffeeSelected>
    </CheckoutAdjustment >
  )
}