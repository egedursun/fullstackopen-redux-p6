import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer"

const store = createStore(counterReducer)


// EXERCISES 6.1 AND 6.2
const App = () => {

    const goodClick = () => {
        store.dispatch({
            type: "GOOD"
        })
    }

    const okClick = () => {
        store.dispatch({
            type: "OK"
        })
    }

    const badClick = () => {
        store.dispatch({
            type: "BAD"
        })
    }

    const resetClick = () => {
        store.dispatch({
            type: "ZERO"
        })
    }

    return (
        <>
            <button onClick={goodClick}>
                good
            </button>
            <button onClick={okClick}>
                ok
            </button>
            <button onClick={badClick}>
                bad
            </button>
            <button onClick={resetClick}>
                reset stats
            </button>
            <div>
                <div>
                    good {store.getState().good}
                </div>
                <div>
                    ok {store.getState().ok}
                </div>
                <div>
                    bad {store.getState().bad}
                </div>
            </div>
        </>
    )
}

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("root"))
}

renderApp()
store.subscribe(renderApp)
