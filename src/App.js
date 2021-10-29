import React, { Component } from 'react';
import './App.css';
import Intro from './Component/Intro';


function App(){
  return(
    <div className="bg-tot">
      <div className="cabecalho">
        <h1>SUPER CURRICULO v1.0</h1>
        <Intro />
        <footer className="rodape">
          <h6>Copyright 2021 - Vinicius Salvador Ribeiro  </h6>
        </footer>
      </div>
      
      
    </div>
  )
}

export default App;
