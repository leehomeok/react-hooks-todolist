import React from "react";

let todos = [
  // Initial Data
  "Buy milk",
  "Some eggs",
  "Go to work"
].map(item =>{
  return {
    item: item,
    complete: false
  }
})
// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: todos
});

export default Store;
