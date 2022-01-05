import { SET_TODO_INPUT, ADD_TODO_INPUT, SET_COMPLETE_INPUT, SET_STATUS_INPUT } from "./constants";

export const setTodoInput = payload => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const addTodoInput = payload => {
    return {
        type: ADD_TODO_INPUT,
        payload
    }
}

export const setCompleteInput = index => {
    return {
        type: SET_COMPLETE_INPUT,
        index
    }
}

export const setStatusInput = payload => {
    return {
        type: SET_STATUS_INPUT,
        payload
    }
}