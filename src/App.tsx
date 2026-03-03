import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import RoleModal from './components/RoleModal/RoleModal';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <RoleProvider>
      <Router basename="/ARGenteIA-Web/">
        <RoleModal />
        <div className="app-container">
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RoleProvider>
  );
}

export default App;
