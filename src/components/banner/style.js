import styled from "styled-components";

export const Banner = styled.div`
  .bannerDiv {
    background-image: url(${(props) => props.img});
    height: 300px;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
    width: 100%;
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;
