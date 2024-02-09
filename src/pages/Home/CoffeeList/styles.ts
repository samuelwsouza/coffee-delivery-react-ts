import styled from 'styled-components'

export const CoffeeMenu = styled.section`
  width: 100vw;
  height: auto;
  /* overflow-y: hidden; */
  background-color: ${(props) => props.theme.white};
  clear: both;
`

export const NavIntrodution = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const ButtonNav = styled.button`
  width: 95px;
  height: 28px;

  margin-left: 1rem;

  background: ${(props) => props.theme.background};

  border: 1px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;

  cursor: pointer;
  transition: background 0.2s border-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-light']};
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const SpanNav = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.65rem;
  font-weight: 600;

  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};

  transition: color 0.2s;
`

export const CoffeeListContainer = styled.div`
  width: 1500px;
  height: 1490px;
  margin: 0 auto;
  /* background: ${(props) => props.theme['yellow-dark']}; */

  margin-bottom: 2rem;
`

export const CoffeeUnities = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 4rem; // espacamento do bottom da page

  display: grid;
  column-gap: 2rem;
  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(4, 256px);

  background: ${(props) => props.theme.white};
`
