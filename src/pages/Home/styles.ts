import styled from 'styled-components'

export const IntroCoffee = styled.section`
  width: 100vw;
  height: 37.5rem;

  display: grid;
  place-items: center;
  justify-content: center;

  padding: 1rem;

  background: ${(props) => props.theme.white};
`

export const CoffeeContainer = styled.div`
  width: 100%;
  height: 40rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`

export const CoffeeApresentation = styled.div`
  max-width: 50rem;
  padding-top: 6rem;
  padding-left: 9rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    /* padding-bottom: 10rem; */
    font-size: 3.5rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};

    padding-top: 1rem;
    padding-right: 1.5rem;
  }
`

export const CoffeeRebrandedItems = styled.div`
  max-width: 35rem;
  height: 6rem;

  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  align-items: start;
  justify-content: flex-start;

  margin-left: 3.3rem;
  margin-top: 3.5rem;
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
  }

  .shopping-cart {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 1000px;
  }

  .package-icon {
    background: ${(props) => props.theme['base-text']};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 1000px;
    margin-left: 2.4rem;
  }

  .timer-icon {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 1000px;
  }

  .coffee-icon {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border: 0;
    border-radius: 1000px;
    margin-left: 2rem;
  }
`

export const CoffeeBackground = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  img {
    width: 700px;
    height: 500px;

    margin-left: 7rem;
  }

  /* position: relative;
  width: 100%;
  height: 400px;

  img {
    position: absolute;
    top: -480px;
    left: 1080px;
    width: 700px;
  }
  */
`
