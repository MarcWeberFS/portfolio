import React from 'react';
import ParticleCanvas from './component/ParticleCanvas';
import Spotlight from './component/Spotlight';
import './App.css';

function App() {
  return (
    <div className="App">
      <Spotlight />
      <header className="App-header bg-slate-950 text-white">

          <div className="relative w-full h-screen">
          <ParticleCanvas />
        </div>
        <div className="relative w-full h-screen transform scale-x-[-1]">
          <ParticleCanvas />
        </div>


      </header>
    </div>
  );
}

export default App;
