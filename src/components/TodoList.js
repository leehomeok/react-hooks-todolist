import React, { useContext } from "react";
import Store from "../context";
import { TodoHeader } from "./TodoHeader";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  let header = state.todos.length === 0 
    ? <h4>Yay! All todos are done! Take a rest!</h4> 
    : (
      <TodoHeader>
        <span className="float-right">{pluralize(state.todos.length)}</span>
      </TodoHeader>
    );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.todos.map((t,i) => (
                <li key={t.item} className="list-group-item">
                  {t.item}
                  <button
                    className="float-right btn btn-primary btn-sm"
                    style={{ 
                      marginLeft: 10,
                      textDecoration: t.complete? 'line-through':''
                    }}
                    onClick={() => dispatch({ type: "COMPLETE", payload: {
                      item: t,
                      index:i
                     } })}
                  >
                    Complete
                  </button>

                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ 
                      marginLeft: 10,
                    }}
                    onClick={() => dispatch({ type: "DELETE", payload:i })}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
