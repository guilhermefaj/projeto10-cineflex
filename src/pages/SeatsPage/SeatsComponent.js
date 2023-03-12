import styled from "styled-components"
import { useState } from "react"
import { selecionado, selecionadoBorda, disponivel, disponivelBorda, indisponivel, indisponivelBorda } from "../../constants";

export default function SeatsComponent({ seat, ids, setIds, sucess, setSucess }) {
    const [selectedSeatColor, setSelectedSeatColor] = useState(undefined)

    function seatClick(seat) {
        if (ids.includes(seat.id)) {
            const newIds = ids.filter((id) => id !== seat.id);
            setIds(newIds);
        } else {
            setIds([...ids, seat.id]);
        }

        if (selectedSeatColor !== undefined) {
            setSelectedSeatColor(undefined);
            return;
        }

        if (seat.isAvailable) {
            setSelectedSeatColor(selecionado);
        } else {
            setSelectedSeatColor(indisponivel);
            alert("Esse assento não está disponível");
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