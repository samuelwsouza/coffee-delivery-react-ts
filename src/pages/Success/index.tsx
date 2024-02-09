import { ImageSucessfull, InfoDelivery, SuccessScreen } from './styles'
import logoMap from '../../assets/icon-map-success.svg'
import logoClock from '../../assets/icon-clock-sucess.svg'
import logoMoney from '../../assets/icon-money-success.svg'
import motoboySuccess from '../../assets/motoboy-success.svg'
import { FormWrapperData } from '../../contexts/FormProviderWrapper'
import { useContext } from 'react'

/* 
  Utilizando o context do FormWrapperData que está nas Routes para os dados
  chegarem até aqui.
*/

export function Success() {

  const { formData, selectedPayment } = useContext(FormWrapperData)

  return (
    <SuccessScreen>
      <InfoDelivery>
        <h1>Uhu! Pedido confirmado</h1>
        <p className="awareness">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <section className="user-info">
          <div className="address delivery">
            <img src={logoMap} alt="" />
            <p>
              Entrega em{' '}
              <span>
                {formData.ruaresidencial}, {formData.numeroresidencial} <br />
              </span>
              {formData.bairroresidencial} - {formData.cidadecliente}, {formData.siglacidade}
            </p>
            <p></p>
          </div>

          <div className="time delivery">
            <img src={logoClock} alt="" />
            <p>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </p>
          </div>

          <div className="payment delivery">
            <img src={logoMoney} alt="" />
            <p>
              Pagamento na entrega <br /> <span>{selectedPayment}</span>
            </p>
          </div>
        </section>
      </InfoDelivery>

      <ImageSucessfull>
        <img src={motoboySuccess} alt="" />
      </ImageSucessfull>
    </SuccessScreen >
  )
}
