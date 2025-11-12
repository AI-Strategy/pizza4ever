import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import OrderDashboardLayout from './layouts/OrderDashboardLayout';
import AdminDashboardLayout from './layouts/AdminDashboardLayout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AllOrders from './pages/AllOrders';
import Menu from './pages/Menu';
import Analytics from './pages/Analytics';
import SchedulingPage from './pages/SchedulingPage';
import VendorOrdersPage from './pages/VendorOrdersPage';
import IntegrationsPage from './pages/IntegrationsPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ReservationsPage from './pages/ReservationsPage';
import CateringPage from './pages/CateringPage';
import WineCurationPage from './pages/WineCurationPage';
import CocktailsPage from './pages/CocktailsPage';
import OurStoryPage from './pages/OurStoryPage';
import CareersPage from './pages/CareersPage';
import NewsletterPage from './pages/NewsletterPage';
import ShopPage from './pages/ShopPage';
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
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/reservations" element={<PublicLayout><ReservationsPage /></PublicLayout>} />
        <Route path="/catering" element={<PublicLayout><CateringPage /></PublicLayout>} />
        <Route path="/wine" element={<PublicLayout><WineCurationPage /></PublicLayout>} />
        <Route path="/cocktails" element={<PublicLayout><CocktailsPage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><OurStoryPage /></PublicLayout>} />
        <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
        <Route path="/newsletter" element={<PublicLayout><NewsletterPage /></PublicLayout>} />
        <Route path="/shop" element={<PublicLayout><ShopPage /></PublicLayout>} />
        <Route path="/checkout-public" element={<PublicLayout><CheckoutPage /></PublicLayout>} />
        <Route path="/login" element={<LoginPage onLogin={login} />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><OrderDashboardLayout><Dashboard /></OrderDashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/admin" element={<ProtectedRoute><AdminDashboardLayout><AdminDashboard /></AdminDashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/orders" element={<ProtectedRoute><OrderDashboardLayout><Dashboard /></OrderDashboardLayout></ProtectedRoute>} />
        <Route path="/dashboard/all-orders" element={<ProtectedRoute><DefaultLayout><AllOrders /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/menu" element={<ProtectedRoute><DefaultLayout><Menu /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/analytics" element={<ProtectedRoute><DefaultLayout><Analytics /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/scheduling" element={<ProtectedRoute><DefaultLayout><SchedulingPage /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/vendor-orders" element={<ProtectedRoute><DefaultLayout><VendorOrdersPage /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/integrations" element={<ProtectedRoute><DefaultLayout><IntegrationsPage /></DefaultLayout></ProtectedRoute>} />
        <Route path="/dashboard/checkout" element={<ProtectedRoute><DefaultLayout><CheckoutPage /></DefaultLayout></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
