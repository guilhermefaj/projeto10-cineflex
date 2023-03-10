import styled from "styled-components"
import { useState } from "react"
import { selecionado, selecionadoBorda, disponivel, disponivelBorda, indisponivel, indisponivelBorda } from "../../constants";

export default function SeatsComponent({ seat }) {
    const [selectedSeat, setSelectedSeat] = useState(undefined)

    function seatClick(seat) {
        if (seat.isAvailable) {
            setSelectedSeat(selecionado)
        } else {
            setSelectedSeat(indisponivel)
        }
    }

    return (
        <SeatItem
            key={seat.id}
            onClick={() => seatClick(seat)}
            selectedSeat={selectedSeat}
            isAvailable={seat.isAvailable}
        >
            {seat.name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: ${props => props.selectedSeat ? (props.isAvailable ? selecionado : indisponivel) : disponivel};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`