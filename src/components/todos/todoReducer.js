export const todoReducer = ( state = [], action ) => {
    switch ( action.type ) {

        case 'add': {
            return [ action.payload, ...state ] // agrega un nuevo todo
        }

        case 'delete':{
            return state.filter(todo => todo.id !== action.payload ) //filtra todos los todos diferente al que se va a borrar
        }

        case 'done': {
            return state.map( todo => (
                todo.id === action.payload
                ? { ...todo, done: !todo.done}
                : todo
            ))
            //cambia el del todo done por el valor booleano contrario que guarda
        }

        default:{
            return state;
        }
    }
}