// MyApp.js
import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.css';

const pkijs = require("pkijs");
console.log(pkijs);
const crypto = pkijs.getCrypto(true);

const algorithm = pkijs.getAlgorithmParameters("RSASSA-PKCS1-V1_5", "generateKey");
const pair = crypto.generateKey(algorithm.algorithm, true, ["sign", "verify"]);// as Required<CryptoKeyPair>;
pair.then(keys => console.log(keys));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
