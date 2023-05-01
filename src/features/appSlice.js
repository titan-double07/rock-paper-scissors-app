import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isResultOpen: false,
    isRulesOpen: false,
    result: '',
    userMove: null,
    score: {player1:0,player2:0}

}

const appSlice = createSlice({
    name: 'app', initialState, reducers: {
        openRules: (state) => {
            state.isRulesOpen = true
        },
        closeRules: (state) => {
            state.isRulesOpen = false
        },
        makeMove: (state, { payload }) => {
            state.userMove = payload.id
        },
        getResult: (state, { payload }) => {
            state.result = payload
        },
        rematch: (state) => {
            state.userMove = null
            state.result = ''
        },
        calculateScore: (state,) => {
        
            switch (state.result) {
                case "you win":
                    state.score.player1++
                    break;
                case "you lose":
                    // if (state.score > 0)
                        state.score.player2++

                    break;

                default: state.score
                    break;
            }
        }
    }
})
export const { openRules, closeRules, makeMove, getResult, rematch, calculateScore } = appSlice.actions
export default appSlice.reducer