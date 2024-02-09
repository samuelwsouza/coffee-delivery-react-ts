import styled from 'styled-components'

export const UnityCardStyled = styled.div`
  width: 100%;
  height: 100%;
`

export const CoffeeCard = styled.div`
  width: 256px;
  height: 310px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px 30px;

  margin-top: 2.5rem;

  padding-bottom: 3rem;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 7rem;
    position: absolute;
    left: 70px;
    top: -21px;
  }

  .category {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 4rem;
    padding: 0.3rem;
    width: 95px;

    border-radius: 100px;
    border: 0;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }

  .category > span {
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: large;
    font-family: 'Baloo 2';

    padding-top: 0.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p.description {
    text-align: center;
    line-height: 1.3;

    color: ${(props) => props.theme['base-label']};
    font-size: x-small;

    padding: 4px 30px;
  }

  .buy-it {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    position: relative;
  }

  .buy-it .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.1rem;

    position: absolute;
    right: 40px;
    top: 40px;
  }

  .buy-it .price > span {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-family: 'Roboto' sans-serif;
    color: ${(props) => props.theme['base-text']};
  }

  .buy-it .price > p {
    font-size: 1.2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-text']};
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: -2rem;

    position: absolute;
    right: -90px;
    bottom: -73px;
  }

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.7rem;

    border-radius: 6px;

    padding: 7px;
    background: ${(props) => props.theme['base-button']};
  }

  .actions .cart-card {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};

    border: 0;
    border-radius: 6px;

    width: 35px;
    height: 35px;
    margin-right: -1rem;
    margin-left: 0.5rem;

    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
      cursor: pointer;
    }
  }
`
