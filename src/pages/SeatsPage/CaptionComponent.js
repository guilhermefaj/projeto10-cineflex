import styled from "styled-components"
import { selecionado, selecionadoBorda, disponivel, disponivelBorda, indisponivel, indisponivelBorda } from "../../constants";

export default function CaptionComponent() {
    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle text="Selecionado" />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle text="Disponível" />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle text="Indisponível" />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    )
}

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${(props) => {
        switch (props.text) {
            case "Selecionado":
                return selecionadoBorda;
            case "Disponível":
                return disponivelBorda;
            case "Indisponível":
                return indisponivelBorda;
            default:
                return disponivel;
        }
    }};
    background-color: ${(props) => {
        switch (props.text) {
            case "Selecionado":
                return selecionado;
            case "Disponível":
                return disponivel;
            case "Indisponível":
                return indisponivel;
            default:
                return disponivel;
        }
    }};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`