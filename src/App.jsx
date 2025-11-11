import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import AllOrders from './pages/AllOrders';
import Menu from './pages/Menu';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<AllOrders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
