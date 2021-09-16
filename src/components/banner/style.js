import styled from "styled-components";

export const Banner = styled.div`
  .bannerDiv {
    background-image: url(${(props) => props.img});
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;
