import React  from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Battery from './pages/Battery';
import Solar from './pages/Solar';
import Weather from './pages/Weather';
import GenerationAndUsage from './pages/GenerationAndUsage';
import EnergyEfficiencyRatio from './pages/EnergyEfficiencyRatio';
import GenerationEfficiency from './pages/GenerationEfficiency';
import FutureForecasting from './pages/FutureForecasting';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Battery" element={<Battery/>} />
        <Route path="/Solar" element={<Solar/>} />
        <Route path="/Weather" element={<Weather/>} />
        <Route path="/GenerationAndUsage" element={<GenerationAndUsage/>} />
        <Route path="/EnergyEfficiencyRatio" element={<EnergyEfficiencyRatio/>} />
        <Route path="/GenerationEfficiency" element={<GenerationEfficiency/>} />
        <Route path="/FutureForecasting" element={<FutureForecasting/>} />
      </Routes>
    </Router>
  )
}

export default App
