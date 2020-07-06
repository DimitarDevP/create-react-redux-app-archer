import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducers/RootReducer"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const saveStoreToLS = state => {
    try{
        const stringified = JSON.stringify(state)
        localStorage.setItem("state", stringified)
    } catch(e) {
        alert(e)
    }
}

const loadStoreFromLS = () => {
    try {
        const stringified = localStorage.getItem("state")
        if (stringified == null) return undefined
        else return JSON.parse(stringified)
    } catch(e) {
        alert(e)
    }
}

const store = createStore(
    rootReducer,
    loadStoreFromLS(),
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveStoreToLS(store.getState()))

export default store


