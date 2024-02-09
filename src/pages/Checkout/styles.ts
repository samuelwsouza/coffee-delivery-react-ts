import styled from 'styled-components'

export const CheckoutAdjustment = styled.main`
  width: 100vw;
  height: auto;
  padding: 2%;
  background: ${(props) => props.theme['white']};

  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const CheckoutBox = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonStyled = styled.button`
  // testing
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: none;
  border-radius: 4px;
`

export const CheckoutAddress = styled.div`
  width: 53rem;
  height: 23.125rem;

  padding: 3rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .top-box-address {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .top-box-address h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 500;
  }

  p {
    font-size: 0.9rem;
    padding-top: 0.3rem;
    padding-left: 1.7rem;
    color: ${(props) => props.theme['base-text']};
  }

  .address-user {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.8rem;
  }

  .address-user input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .address-user input {
    padding: 1em;

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }

    &:valid {
      color: ${(props) => props.theme['base-text']};
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  .cep {
    width: 12.5rem;
    height: 2.625rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }

  .streetname {
    width: 100%;
    height: 2.625rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }

  .info {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 1rem;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .numberhouse {
      width: 12.5rem;
      height: 2.625rem;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
      appearance: none;
    }

    .complemento-opcional {
      flex: 1;
      height: 2.625rem;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
      appearance: none;
    }

    .neighborhood {
      width: 13rem;
      height: 2.625rem;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
    }

    .city {
      width: 29rem;
      height: 2.625rem;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
    }

    .sigla {
      width: 10%;
      height: 2.625rem;

      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};

      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
    }
  }
`

export const CheckoutPayment = styled.div`
  width: 53rem;
  height: 12.93rem;

  padding: 3rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .top-box-pay {
    display: flex;
    align-items: center;
  }

  .top-box-pay h4 {
    font-weight: 500;
    padding-left: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.9rem;
    padding-left: 1.7rem;
    color: ${(props) => props.theme['base-text']};
  }

  .select-pay-mode {
    display: flex;
    gap: 1rem;

    padding-top: 2rem;
    padding-left: 0.2rem;
  }

  .select-pay-mode button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    gap: 0.8rem;

    width: 13rem;
    height: 3.125rem;

    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    border: none;
    border-radius: 6px;
    font-size: 0.75rem;
    text-transform: uppercase;


    cursor: pointer;
    transition: background-color 0.1s border 0.1s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      border: 1px solid purple;
    }
  }
`

export const CoffeeSelected = styled.div`
  width: 34rem;
  height: auto;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px 45px 8px 45px;

  .coffee-card-selected {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.5rem 3rem;

    .info {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;

      position: relative;

      max-width: 240px;
      height: 60px;

      gap: 0.3rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      p {
        font-size: 0.9rem;
        color: ${(props) => props.theme['base-subtitle']};
        padding-left: 1rem;
      }

      .counter {
        width: 4.5rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 0.7rem;

        border-radius: 6px;

        padding: 7px;
        background: ${(props) => props.theme['base-button']};

        position: absolute;
        top: 1.6rem;
        left: 5.6rem;
      }

      button {
        width: 5.68rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        background-color: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};

        border: none;
        border-radius: 6px;

        text-transform: uppercase;
        font-size: 0.75rem;

        position: absolute;
        top: 1.6rem;
        left: 10.6rem;

        cursor: pointer;
        transition: background-color 0.3s color 0.3s;
      }

      button:hover {
        background: ${(props) => props.theme['base-hover']};
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    .preco-do-item {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme['base-text']};
    }
  }

  .valores {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    width: 100%;
    padding: 2.5rem 2.5rem;
    /* background: red; */

    .total-items-sum {
      display: flex;
      justify-content: space-between;

      .title-total-items {
        font-size: 0.8rem;
        color: ${(props) => props.theme['base-text']};
      }

      .valor-total-items {
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    .frete-preco {
      display: flex;
      justify-content: space-between;

      .title-entrega {
        font-size: 0.8rem;
        color: ${(props) => props.theme['base-text']};
      }

      .valor-entrega {
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    .total {
      display: flex;
      justify-content: space-between;

      .title-total-all-items {
        font-size: 1.1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      .total-all {
        font-size: 1.1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  .button-environment-confirm {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.1rem;

    button.confirm-pay-coffee {
      width: 23rem;
      height: 2.875rem;

      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};

      border: none;
      border-radius: 6px;

      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;

      transition: background-color 0.2s;
    }

    button.confirm-pay-coffee-disabled {
      width: 23rem;
      height: 2.875rem;

      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-card']};

      border: none;
      border-radius: 6px;

      cursor: none;
      text-transform: uppercase;
      font-weight: 600;
    }

    button.confirm-pay-coffee:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  .cart-empty {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 17.5rem;
  }
`
export const CoffeSelectAboveTwo = styled.div`
  
  .coffee-selected-above-2 {
    display: fixed;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.5rem 5rem;
    background: red;

    .info {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;

      position: relative;

      max-width: 240px;
      height: 60px;

      gap: 0.3rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      p {
        font-size: 0.9rem;
        color: ${(props) => props.theme['base-subtitle']};
        padding-left: 1rem;
      }

      .counter {
        width: 4.5rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 0.7rem;

        border-radius: 6px;

        padding: 7px;
        background: ${(props) => props.theme['base-button']};

        position: absolute;
        top: 1.6rem;
        left: 5.6rem;
      }

      button {
        width: 5.68rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        background-color: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};

        border: none;
        border-radius: 6px;

        text-transform: uppercase;
        font-size: 0.75rem;

        position: absolute;
        top: 1.6rem;
        left: 10.6rem;

        cursor: pointer;
        transition: background-color 0.3s color 0.3s;
      }

      button:hover {
        background: ${(props) => props.theme['base-hover']};
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    .preco-do-item {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${(props) => props.theme['base-text']};
    }
  }
`