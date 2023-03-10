import styled from "styled-components"
import { useState } from "react"
import { selecionado, selecionadoBorda, disponivel, disponivelBorda, indisponivel, indisponivelBorda } from "../../constants";

export default function SeatsComponent({ seat }) {
    const [selectedSeatColor, setSelectedSeatColor] = useState(undefined)

    console.log(selectedSeatColor)
    function seatClick(seat) {
        if (selectedSeatColor !== undefined) {
            setSelectedSeatColor(undefined);
            return;
        }

        if (seat.isAvailable) {
            setSelectedSeatColor(selecionado);
        } else {
            setSelectedSeatColor(indisponivel);
        }
    }

    return (
        <SeatItem
            key={seat.name}
            onClick={() => seatClick(seat)}
            selectedSeatColor={selectedSeatColor}
            isAvailable={seat.isAvailable}
        >
            {seat.name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => props.selectedSeatColor ? (props.isAvailable ? selecionadoBorda : indisponivelBorda) : (props.isAvailable ? disponivelBorda : indisponivelBorda)};
    background-color: ${props => props.selectedSeatColor ? (props.isAvailable ? selecionado : indisponivel) : (props.isAvailable ? disponivel : indisponivel)};
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