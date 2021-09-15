import styled from 'styled-components'

export const Style = styled.div`
    margin: auto;
    position: relative;
    width: 100%;
    height: 400px;
    background: white;
    h1{
            position: absolute;
            margin-left: 1em;
            top: -65px;
            margin-bottom: 1em;
            margin-top: 0;
            color: #FF0099;
            letter-spacing: 3px;
        }
    .prev_button{
        position: absolute;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        left: 5px;
        top: 50%;
        outline: none;
        cursor: pointer;
        z-index: 90;
    }
    .next_button{
        position: absolute;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        right: 5px;
        top: 50%;
        outline: none;
        cursor: pointer;
        z-index: 90;
    }
    .cards-slider{
        position: relative;
        max-width: 350px;
        margin: 0 auto;
        .cards-slider-wrapper{
            position: absolute;
            width: 100%;
            display: flex;
            transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
            }
    }
    .cards-slider.active-slide-${props => props.num} #card-${props => props.num}{
            transform: scale(1);
            opacity: 1;
        }
    
`

export const StyleCard = styled.div`
    .card{
        color: red;
        margin: auto;
        width: 350px;
        height: 400px;
        flex: 1;
        transform: scale(0.7);
        transition: opacity 0.3s linear, transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
`
export const Skeleton = styled.div`
margin-top: 90px;
.card,
    .skeleton {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 400px;
      height: 250px;
      margin: 20px;
      margin-top: 0;
      background-color: #E2E8F0;
      width: 210px;
      box-shadow:
        0 9px 33px rgba(0, 0, 0, 0.07);
    }


    .card-text, .skeleton-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 250px;
        margin-left: 10px;
    }


    .card-img, .skeleton-img{
        width: 100%;
        height: 120px;
        margin-top: -57px;
        margin-bottom: 20px;
    }


    .card-link, .skeleton-link{
        margin-top: 20px;
    }


    .card-skills , .skeleton-skills{
        display: flex;
        justify-content: space-between;
    }
.skeleton-title{
        width: 150px;
        height: 12px;
        margin-left: 20px;
        animation: pulse 2s infinite ease-in-out;
    }

    .skeleton-img{
        animation: pulse 2s infinite ease-in-out;
    }

    .skeleton-skills .skill{
        width: 65px;
        height: 12px;
        animation: pulse 2s infinite ease-in-out;
    }

    .skeleton-link{
        width: 75px;
        height: 12px;
        animation: pulse 2s infinite ease-in-out;
    }
    @keyframes pulse {
        0% {
            background-color: #94A3B8;
        }

        50% {
            background-color: #CBD5E1;
        }

        100% {
            background-color: #94A3B8;
        }
    }
`