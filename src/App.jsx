import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPublicLayout from './layouts/MainPublicLayout';
import ShopLayout from './layouts/ShopLayout';
import CateringLayout from './layouts/CateringLayout';

// Import existing and new pages
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import ReservationsPage from './pages/ReservationsPage';
import CateringPage from './pages/CateringPage';
import OurStoryPage from './pages/OurStoryPage';
import ShopPage from './pages/ShopPage';
import CareersPage from './pages/CareersPage';
import CocktailsPage from './pages/CocktailsPage';
import WineCurationPage from './pages/WineCurationPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import Newsletter from './pages/Newsletter';
import { useState } from 'react';

// A mock auth object
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

// For now, we will remove the auth logic to focus on UI development
// You can re-integrate your auth logic here later
// import LoginPage from './pages/LoginPage';
// import useAuth from './hooks/useAuth'; // Assuming you move useAuth to a hook file
// const ProtectedRoute = ({ children }) => { ... };

const RouteWithLayout = ({ Layout, Component }) => (
  <Layout>
    <Component />
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={login} />} />
        <Route path="/newsletter" element={<Newsletter />} />
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
