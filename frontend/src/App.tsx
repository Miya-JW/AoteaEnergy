import React  from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
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
        <Route path="/battery" element={<Battery/>} />
        <Route path="/solar" element={<Solar/>} />
        <Route path="/weather" element={<Weather/>} />
        <Route path="/history" element={<GenerationAndUsage/>} />
        <Route path="/generation-and-usage" element={<GenerationAndUsage/>} />
        <Route path="/energy-efficiency-ratio" element={<EnergyEfficiencyRatio/>} />
        <Route path="/generation-efficiency" element={<GenerationEfficiency/>} />
        <Route path="/future-forecasting" element={<FutureForecasting/>} />
      </Routes>
    </Router>
  )
}

export default App
