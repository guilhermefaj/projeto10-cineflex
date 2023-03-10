import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import CaptionComponent from "./CaptionComponent";
import SeatsComponent from "./SeatsComponent";

export default function SeatsPage() {
    const [session, setSession] = useState(undefined)
    const [ids, setIds] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const { idSessao } = useParams();

    const object = {
        ids: ids,
        name: name,
        cpf: cpf
    }

    console.log("Object ", object)

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        const promise = axios.get(url)

        promise.then(res => setSession(res.data))
        promise.catch(err => console.log("erro: ", err.response.data))
    }, [])

    function sendData(event) {
        event.preventDefault()

        console.log("ids:", ids)

        if (ids.length === 0) {
            console.log("ids:", ids)
            alert("Você deve selecionar pelo menos um assento");
            return;
        }


        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", object)

        request.then(res => console.log(res.data))
        request.catch(err => console.log(err.response.data))
    }

    if (session === undefined) {
        return <div>carregando...</div>
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map((seat) => (
                    <SeatsComponent
                        key={seat.id}
                        seat={seat}
                        ids={ids}
                        setIds={setIds}
                    />
                ))}
            </SeatsContainer>

            <CaptionComponent />

            <FormContainer onSubmit={sendData}>
                <label htmlFor="nome">Nome do Comprador</label>
                <input
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <label htmlFor="CPF">CPF do Comprador</label>
                <input
                    id="CPF"
                    name="CPF"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
                <Link>
                    <button type="submit">Reservar Assento(s)</button>
                </Link>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={session.movie.posterURL} alt={session.movie.title} />
                </div>
                <div>
                    <p>{session.movie.title}</p>
                    <p>{session.day.weekday} - {session.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`