import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [
//           { id: 1, text: 'Flower', amount: -20 },
//           { id: 2, text: 'Salary', amount: 300 },
//           { id: 3, text: 'Book', amount: -10 },
//           { id: 4, text: 'Camera', amount: 150 }
         ]
}

//Create context
export const GlobalContext = createContext(initialState)

//provider component (envolve tudo para compartilhar o acesso ao estado GlobalState)
export const GlobalProvider = ({ children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value= {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>)
}
/*
[state, dispatch] = useReducer(reducer, INITIAL_STATE)
neste comando acima tem useReducer, isto já me liga uma luzinha dizendo:
1) agora vai ser incializado o estado de state, com o conteúdo de INITIAL_STATE
2) Cada vez que eu quiser fazer alguma alteração na variável state, eu faço um dispatch. Poderia ser qualquer outra palavra.
3) Quando é dado um dispatch, é chamada a função AppReducer, que é quem trata os dispatches.
reducer também poderia ter qualquer outro nome;
4) na função reducer (ou seja lá o nome que deres), se faz o tratamento do dispatch, conforme o tipo de ação indicado neste dispatch.
Eu achei tudo meio amarrado e complicado mesmo, mas funciona para aletrar o estado da variável.
const [dado, tratamento] = useReducer(func_trata, INITIAL_STATE)
se o comando fosse digitado da forma acima, estaria tudo bem. Só importa o useReducer
*/