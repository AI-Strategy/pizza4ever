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
import LocalEmployeeCardPage from './pages/LocalEmployeeCardPage';

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
        {/* Public Routes with MainPublicLayout */}
        <Route path="/" element={<RouteWithLayout Layout={MainPublicLayout} Component={HomePage} />} />
        <Route path="/menu" element={<RouteWithLayout Layout={MainPublicLayout} Component={Menu} />} />
        <Route path="/reservations" element={<RouteWithLayout Layout={MainPublicLayout} Component={ReservationsPage} />} />
        <Route path="/our-story" element={<RouteWithLayout Layout={MainPublicLayout} Component={OurStoryPage} />} />
        <Route path="/careers" element={<RouteWithLayout Layout={MainPublicLayout} Component={CareersPage} />} />
        <Route path="/cocktails" element={<RouteWithLayout Layout={MainPublicLayout} Component={CocktailsPage} />} />
        <Route path="/wine" element={<RouteWithLayout Layout={MainPublicLayout} Component={WineCurationPage} />} />
        <Route path="/checkout" element={<RouteWithLayout Layout={MainPublicLayout} Component={CheckoutPage} />} />
        <Route path="/local-employee-card" element={<RouteWithLayout Layout={MainPublicLayout} Component={LocalEmployeeCardPage} />} />

        {/* Specialized Layouts */}
        <Route path="/shop" element={<RouteWithLayout Layout={ShopLayout} Component={ShopPage} />} />
        <Route path="/catering" element={<RouteWithLayout Layout={CateringLayout} Component={CateringPage} />} />

        {/* You can add back your dashboard and protected routes here */}
        {/* <Route path="/login" element={<LoginPage onLogin={login} />} /> */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><DefaultLayout><Dashboard /></ProtectedRoute>} /> */}

        {/* Redirect any unknown paths to the homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
