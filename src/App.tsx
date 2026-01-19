import { PrototypeProvider } from './context/PrototypeContext';
import { ControlPanel } from './components/ControlPanel';
import { Slot } from './components/Slot';
import './App.css';

function App() {
  return (
    <PrototypeProvider>
      <div className="app-container">
        {/* Control Panel */}
        <ControlPanel />
        
        {/* Slot Grid */}
        <div className="slot-grid">
          <Slot id="slot1" />
          <Slot id="slot2" />
          <Slot id="slot3" />
          <Slot id="slot4" />
        </div>
      </div>
    </PrototypeProvider>
  );
}

export default App;
