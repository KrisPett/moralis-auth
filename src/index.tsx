import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MoralisProvider} from "react-moralis";


const moralisAppId = "JlNfKUXVfWwMQetTWnX3Hi90kH28CwXBC5g8q83i";
const moralisServerUrl = "https://dfsxdbakrjnk.usemoralis.com:2053/server";

ReactDOM.render(
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerUrl}>
        <App/>
    </MoralisProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
