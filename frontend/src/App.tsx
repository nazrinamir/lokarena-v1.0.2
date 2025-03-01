import './styles/globals.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/authentication/login';
import Register from './pages/authentication/register';
import PageNotFound from './pages/pageNotFound';
import Dashboard from './pages/dashboard';
import ProfileUser from './pages/profileuser';
import ProfileTeam from './pages/profileteam';
import Setting from './pages/setting';
import RateTeam from './pages/rating/rateTeam';
import RatePlace from './pages/rating/ratePlace';
import { AuthProvider } from './contexts/AuthProvider';
import { ProtectedRoute } from './contexts/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen w-full bg-[#383434]">
          {/* Navigation Header */}


          {/* Routes */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute children={<Dashboard />} />}/>
            <Route path="/profileuser" element={<ProtectedRoute children={<ProfileUser />} />} />
            <Route path="/profileteam" element={<ProtectedRoute children={<ProfileTeam />} />} />
            <Route path="/setting" element={<ProtectedRoute children={<Setting />} />} />
            <Route path="/rateTeam" element={<ProtectedRoute children={<RateTeam />} />} />
            <Route path="/ratePlace" element={<ProtectedRoute children={<RatePlace />} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
