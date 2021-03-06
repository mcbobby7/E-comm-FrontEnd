import styled from "styled-components";

export const Box = styled.div`
  background-color: white;
  height: 80vh;
  border: none;
  outline: none;
  width: 100%;
  .box {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 20px 0;
  }

  .box .icns {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
  }

  .box .image {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 90%;
    margin: auto;
  }

  .box .image .err {
    width: 100%;
  }

  .box .error {
    font-size: 16px;
    text-align: center;
    color: #343a40;
    width: 400px;
    margin: auto;
    margin-top: 20px;
  }

  .box button {
    background-color: #b580d1;
    width: 50%;
    margin: 10px auto;
    color: white;
  }
  .err {
    height: 460px;
    /* height: 400px; */
  }
  /*# sourceMappingURL=error-popup.component.css.map */
`;
