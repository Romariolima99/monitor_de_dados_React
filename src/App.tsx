
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ApiTemperatura = {
  Watt: number;
  pressao: number;
  temperatura: number;
  };


  
function App() {

  const [Watt, setWatt] = useState("");
  const [pressao, sePressao] = useState("");
  const [temperatura, setTemperatura] = useState("");





function GetDados (){ axios.get<ApiTemperatura>('https://nodejs.romariogold99.repl.co/')
  .then((res: { data: any; }) =>  {
    console.log(res.data);
       if(res.data.temperatura >= 80) {
        notifyStatus400();
       return
          } 


    setWatt(res.data.Watt);
    sePressao(res.data.pressao);
    setTemperatura(res.data.temperatura);  
    return
  });

}

useEffect(() => { setInterval(GetDados, 3000); // utilize o useEffect para colocar um intervalo nas chamadas da função



 },[])



 function notifyStatus400(){
  toast.warn('Alerta , Temperatura muito Alta', {
   
    });

}
  return (
    
  <>
    <ToastContainer  position="top-center" bodyStyle={{width:'100vw'}} />
  <div className='texto-centro'>Monitor de dados</div>
  <div className="cards">
    <label id="summary">
      <input type="checkbox" />
      <article>
        <div className="front">
          <header>
            <h2>Pressão</h2>
          </header>
          <var>{pressao + " Psi"}</var>
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
          <var>{Watt + " Watts"}</var>
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
  </>
  );
}


export default App;
