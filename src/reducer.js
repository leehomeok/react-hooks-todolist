export default function reducer(state, action) {
  let {payload } = action
  switch (action.type) {
    case "ADD_TODO":
      // return current state if empty
      if (!payload)  return state;
      // return current state if duplicate
      if (state.todos.includes(payload.item)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "COMPLETE":
      let {item ,index} = payload
      console.log(state.todos[index])
      state.todos[index].complete = !state.todos[index].complete
      return {
        ...state,
        todos: [...state.todos] 
      };
    case "DELETE":
      console.log(payload)
      return {
        ...state,
        todos: state.todos.filter((t,i) => i !== action.payload)
      };
    default:
      return state;
  }
}
