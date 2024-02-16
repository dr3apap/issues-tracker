import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './Controllers/Redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
    reducer
})
//const domNode = document.getElementById("root") as HTMLDivElement

const root = createRoot(document.getElementById("root") as HTMLDivElement).render(
    // <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

