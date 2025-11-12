import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import OrderDashboardLayout from './layouts/OrderDashboardLayout';
import AdminDashboardLayout from './layouts/AdminDashboardLayout';
import SchedulingLayout from './layouts/SchedulingLayout';
import VendorOrdersLayout from './layouts/VendorOrdersLayout';
import IntegrationsLayout from './layouts/IntegrationsLayout';
import SchedulingAltLayout from './layouts/SchedulingAltLayout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AllOrders from './pages/AllOrders';
import Menu from './pages/Menu';
import Analytics from './pages/Analytics';
import SchedulingPage from './pages/SchedulingPage';
import SchedulingAltPage from './pages/SchedulingAltPage';
import VendorOrdersPage from './pages/VendorOrdersPage';
import IntegrationsPage from './pages/IntegrationsPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

// A mock auth object
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};


function App() {
  const { login } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={login} />} />
        <Route path="/" element={<ProtectedRoute><OrderDashboardLayout><Dashboard /></OrderDashboardLayout></ProtectedRoute>} />
        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboardLayout><AdminDashboard /></AdminDashboardLayout></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><OrderDashboardLayout><Dashboard /></OrderDashboardLayout></ProtectedRoute>} />
        <Route path="/all-orders" element={<ProtectedRoute><DefaultLayout><AllOrders /></DefaultLayout></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><DefaultLayout><Menu /></DefaultLayout></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><DefaultLayout><Analytics /></DefaultLayout></ProtectedRoute>} />
        <Route path="/scheduling" element={<ProtectedRoute><SchedulingLayout><SchedulingPage /></SchedulingLayout></ProtectedRoute>} />
        <Route path="/scheduling-alt" element={<ProtectedRoute><SchedulingAltLayout><SchedulingAltPage /></SchedulingAltLayout></ProtectedRoute>} />
        <Route path="/vendor-orders" element={<ProtectedRoute><VendorOrdersLayout><VendorOrdersPage /></VendorOrdersLayout></ProtectedRoute>} />
        <Route path="/integrations" element={<ProtectedRoute><IntegrationsLayout><IntegrationsPage /></IntegrationsLayout></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><DefaultLayout><CheckoutPage /></DefaultLayout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
