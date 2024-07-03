import logo from './logo.svg';
import './App.css';
import ParticleCanvas from './component/ParticleCanvas';

function App() {
  return (

    <div className="App">
      <header className="App-header">

        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <ParticleCanvas />
        </div>

      </header>

    </div>
  );
}

export default App;
