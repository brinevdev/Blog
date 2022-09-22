import { configureStore } from "@reduxjs/toolkit";
import  reducer  from './../components/postsSlice'


//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore ({
    reducer,
    devTools: true,
})

export default store;