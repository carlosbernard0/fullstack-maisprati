import './App.css'
import HelloWorld from "./components/HelloWorld"
import Cabecalho from "./components/Cabecalho"
import Footer from './components/Footer'

function App(){

    return (<>
        <Cabecalho/>
        <HelloWorld/>
        <Footer nomeEmpresa='CB2' nomeFuncionario='Carlos'/>   
    </>)

}

export default App