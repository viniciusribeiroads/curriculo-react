import React, { Children, Component, useState } from 'react';
import bg1 from '../images/bg1r.png'
import qb1 from '../images/questionBlock.gif'
import skills from '../images/conhecimentos.png';

function Intro(){

    const [instructions, setInstructions] = useState('');
    const [dados, setDados] = useState([]);
    setInterval( () => {setInstructions('Clique para obter detalhes')}, 1000);
    
    


    const exibirDadosPessoais = () =>{
        return(
            <div className='informacoes'>
                {setInstructions('DADOS PESSOAIS')}
                {setDados(['Vinicius Salvador Ribeiro', 'Belo Horizonte - MG', 'Solteiro'])}
            </div>
            
        );
    }

    const exibirStacks = () =>{
      return(
          <div className='informacoes'>
              {setInstructions('CONHECIMENTOS')}
              {setDados(['JavaScript/ CSS/ HTML5','.NET/ C#','GIT/ GitHub'])}
          </div>
          
      );
  }

  const contact = () =>{
    return(
        <div className='informacoes'>
            {setInstructions('CONHECIMENTOS')}
            {setDados(['Linkedin', 'GitHub', 'Whatsapp'])}
        </div>
        
    );
}






    return(
      <div className="bg-tot">
        <div className="cabecalho">
          <h4>{instructions}</h4>
          <br/>
          <br/>
          <h5>{dados.map(dado => (
          <li key={dado}>{dado}<br/><br/></li>
          ))}
          </h5>
          <div className="img-intro">
          <img src={bg1}/>
          <a className="img-block" onClick={exibirDadosPessoais}><img src={qb1} width='200%'/></a>
          <a className="img-block" onClick={exibirStacks}><img src={qb1} width='200%'/></a>
          <a className="img-block" onClick={contact}><img src={qb1} width='200%'/></a>
          <a className="img-block" onClick={exibirDadosPessoais}><img src={qb1} width='200%'/></a>
          </div>
          <div className="skills">
            <img src={skills}/>
          </div>
        </div>
        
      </div>
    )
  }
  
  export default Intro;