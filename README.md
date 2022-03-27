<div align="center">
    <p align="center">
      <img src="public/orange.png" alt="ChainQT3" width="100" height="100" />
    </p>
</div>

## Client URL [ChainQT3](https://chainqt3.com/)

## Install client

```sh
npm install
```

```sh
yarn install
```

### Make .env file in root directory
```sh
REACT_APP_MORALIS_APPLICATION_ID=...
REACT_APP_MORALIS_SERVER_URL=...
```

```jsx
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
    if (!APP_ID || !SERVER_URL) throw new Error("Missing Moralis Application ID or Server URL. Make sure to set your .env file.");
    return <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}><App/></MoralisProvider>
}

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);
```

