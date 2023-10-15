
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import './App.css';

type ApiTemperatura = {
  Watt: string;
  pressao: string;
  temperatura: string;
  };


  
function App() {

  const [Watt, setWatt] = useState("");
  const [pressao, sePressao] = useState("");
  const [temperatura, setTemperatura] = useState("");
 

  function GetDados (){ axios.get<ApiTemperatura>('https://nodejs--romariogold99.repl.co/')
  .then((res) => {
          console.log(res.data)

          // if(res.data.temperatura >= 80) {
          // alert ("temperatura muito alta")    

          // } 

          setWatt(res.data.Watt);
          sePressao(res.data.pressao);
          setTemperatura(res.data.temperatura);    
  })

  .catch((error) => {
          console.log(error);
         
  });
}

useEffect(() => { setInterval(GetDados, 3000); // utilize o useEffect para colocar um intervalo nas chamadas da função



 },[])


  return (
    
  <div>
    <div id="alert" className="alert"> 
    <span className="closebtn">&times;</span>  
    <strong>Cuidado!</strong> A Temperatura esta acima de 80°C
  </div>

  <div className="cards">
    <label id="summary">
      <input type="checkbox" />
      <article>
        <div className="front">
          <header>
            <h2>Pressão</h2>
          </header>
          <var>{pressao}</var>
          <h3>Pressão</h3>
        </div>
        <div className="back">
          <header>
            <h2>Informações</h2>
          </header>
          <p>Este card fornece informações cruciais sobre a monitorização da pressão.</p>
        </div>
      </article>
    </label>
    <label id="overdue">
      <input type="checkbox" />
      <article>
        <div className="front">
          <header>
            <h2>Temperatura</h2>
          </header>
          <var>{temperatura + "°C"}  </var>
          <h3>Temperatura</h3>
        </div>
        <div className="back">
          <header>
            <h2>informações</h2>
          </header>
          <p>Este card fornece informações cruciais sobre a monitorização da Temperatura.</p>
        </div>
      </article>
    </label>
    <label id="features">
      <input type="checkbox" />
      <article>
        <div className="front">
          <header>
            <h2>Potência</h2>
          </header>
          <var>{Watt}</var>
          <h3>Potência</h3>
        </div>
        <div className="back">
          <header>
            <h2>informações</h2>
          </header>
          <p>Este card fornece informações cruciais sobre a monitorização da Potência</p>
        </div>
      </article>
    </label>
  </div>
  </div>

  );
}


export default App;
