import logo from './logo.svg';
import './App.css';
import Place from './components/Place';

function App() {
  return (
    <>
    <div className='flex-div'>
        <Place title="Chennai" img="chennai" desc="Chennai on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu" rating="4"/>
        <Place title="Salem" img="madurai" desc="Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu" rating="3"/>
        <Place title="Madurai" img="salem" desc="Salem is a city on the Thirumanimuthar River, in the south Indian state of Tamil Nadu" rating="4.2"/>
    </div>
    </>

  );
}

export default App;
