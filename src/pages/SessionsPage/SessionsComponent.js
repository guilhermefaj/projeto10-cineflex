import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SessionsComponent(props) {
    const { filme } = props
    console.log("filme:", filme)


    return (
        < SessionContainer>
            {filme.weekday} - {filme.date}
            < ButtonsContainer>
                <Link to={`/assentos/${filme.showtimes[0].id}`}>
                    <button>{filme.showtimes[0].name}</button>
                </Link>
                <Link to={`/assentos/${filme.showtimes[1].id}`}>
                    <button>{filme.showtimes[1].name}</button>
                </Link>
            </ButtonsContainer >
        </SessionContainer >
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
        display:flex;
    }
`