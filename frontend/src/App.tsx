import './styles/globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/login';
import Register from './pages/authentication/register';
import PageNotFound from './pages/pageNotFound';
import Dashboard from './pages/dashboard';
import ProfileUser from './pages/profileuser';
import ProfileTeam from './pages/profileteam';
import Setting from './pages/setting';
import RateTeam from './pages/rating/rateTeam';
import RatePlace from './pages/rating/ratePlace';
import { AuthProvider, useAuth } from './contexts/AuthProvider';
import { ProtectedRoute } from './contexts/ProtectedRoute';
import { ToastProvider } from './contexts/ToastContext';
import ProfileSelection from './pages/profileSelection';
import Toast from './components/toast';
import Sidebar from './components/sidebar';

function AppContent() {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className=" relative min-h-screen w-full flex ">
      <Toast />
      {isAuthenticated && <Sidebar />}
      <div className={`${isAuthenticated ? 'ml-auto w-5/6' : 'w-5/6'} h-full`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute children={<Dashboard />} />} />
          <Route path="/profileuser" element={<ProtectedRoute children={<ProfileUser />} />} />
          <Route path="/select" element={<ProtectedRoute children={<ProfileSelection />} />} />
          <Route path="/profileteam" element={<ProtectedRoute children={<ProfileTeam />} />} />
          <Route path="/setting" element={<ProtectedRoute children={<Setting />} />} />
          <Route path="/rateTeam" element={<ProtectedRoute children={<RateTeam />} />} />
          <Route path="/ratePlace" element={<ProtectedRoute children={<RatePlace />} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
