import * as actionTypes from '../actionType'

const initialState = {
    todos: [
        { id: 1, input: 'apple', isChecked: false },
        { id: 2, input: 'pineapple', isChecked: false },
        { id: 3, input: 'orange', isChecked: true },
        { id: 4, input: 'mango', isChecked: true },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS:
            return {
                todos: [...state.todos, action.todos]
            }
                    case actionTypes.DELETE_ITEMS:
            const newTodo = state.todos.filter(todo => {
                return todo.id !== action.todos.id
            })
            return {
                ...state,
                todos: newTodo
            }
            
        case actionTypes.EDIT:
            const updateTodo = state.todos.map( todo => {
                if(todo.id === action.todos.id) {
                    return {...todo, input: action.todos.input}
                }
                return todo
            })
            return {
                todos: updateTodo
            }
            

        case actionTypes.ISCHECKED:
            return {
                todos: action.todos
            }
        
        default:
            return state;
    }
}

export default reducer;