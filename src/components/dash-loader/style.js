import styled from "styled-components";

export const Box = styled.div`
  z-index: 700;
  .al {
    background-color: rgba(65, 61, 61, 0.35);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 500;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .as {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .lo {
    font-size: 25px;
    color: white;
  }

  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 32px solid #b580d1;
    border-color: #fff transparent #fff transparent;
    -webkit-animation: lds-hourglass 1.2s infinite;
    animation: lds-hourglass 1.2s infinite;
  }

  @-webkit-keyframes lds-hourglass {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      -webkit-transform: rotate(900deg);
      transform: rotate(900deg);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      -webkit-transform: rotate(1800deg);
      transform: rotate(1800deg);
    }
  }

  @keyframes lds-hourglass {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      -webkit-transform: rotate(900deg);
      transform: rotate(900deg);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      -webkit-transform: rotate(1800deg);
      transform: rotate(1800deg);
    }
  }
  /*# sourceMappingURL=dash-loader.component.css.map */
`;
