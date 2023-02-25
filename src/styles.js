import styled from 'styled-components'

import { FiTrash, FiCheck } from "react-icons/fi";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ToDoList = styled.div`
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 50px;
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

export const Input = styled.input`
    width: 342px;
    height: 40px;
    left: 20px;
    top: 30px;
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    left: 390px;
    top: 30px;
    background: #8052EC;
    border-radius: 5px;
    border: none;
    margin-left: 28px;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? '#E8FF8B' : '#e4e4e4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
    }

`

export const Trash = styled(FiTrash)`
    cursor: pointer;
`

export const Check = styled(FiCheck)`
    cursor: pointer;
`
