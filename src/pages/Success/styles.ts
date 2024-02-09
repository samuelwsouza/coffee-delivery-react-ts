import styled from 'styled-components'

export const SuccessScreen = styled.section`
  width: 100vw;
  height: auto;
  /* background: ${(props) => props.theme['base-input']}; */

  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  overflow-y: hidden;

  display: flex;
  justify-content: center;
  flex-direction: row;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p.awareness {
    font-size: 1.3rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .user-info {
    position: relative;
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 2rem;

    width: 32.875rem;
    height: 16.875rem;

    margin-top: 2.6rem;
    padding: 2.5rem;

    border: 1px solid transparent;

    &::before {
      content: '';
      position: absolute;
      inset: 0; // The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It has the same multi-value syntax of the margin shorthand.
      border-radius: 8px 40px;
      padding: 2px;
      background: linear-gradient(45deg, rgb(219, 172, 44), rgb(128, 71, 248));
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        //The mask CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor; // The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
      mask-composite: exclude;
    }

    // ARRUMAR USER INFO E IMPLEMENTAR IDEIA DO https://dev.to/afif/border-with-gradient-and-radius-387f

    .delivery {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    span {
      font-weight: 600;
    }
  }
`

export const InfoDelivery = styled.div`
  width: 45rem;
  padding-left: 10rem;
  /* background: #ccc; */
`

export const ImageSucessfull = styled.div`
  flex: 1;
  height: 535px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: orange; */

  img {
    width: 32rem;
    /* background-color: red; */
  }
`
