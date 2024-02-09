import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  img {
    margin: 2rem 10rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-items: center;
    margin-right: 10rem;
    position: relative; 

    a {
      display: flex;
      align-items: center;
      justify-items: center;
    }

    a:nth-child(1) {
      width: 9rem;
      margin-right: 0.75rem;
    }

    a > .city {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;

      /* padding: 0.4rem; */

      width: 8.938rem;
      height: 2.375rem;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      border: 0;
      border-radius: 8px;

      cursor: pointer;
    }

    a > button.city > span {
      font-weight: regular;
      font-family: 'Roboto', sans-serif;
    }

    a > .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative; 

      width: 2.375rem;
      height: 2.375rem;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      border: 0;
      border-radius: 8px;

      cursor: pointer;
    }
  }
`

export const NotificationCart = styled.div`
  position: absolute;
  top: -5px; 
  right: -5px; 
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme['yellow']};
`