import './App.css';
import AboutBitcoin from './pages/about/about';
import Navbar from './components/navbar/navbar';
import Team from './components/team/Team';
import Tokenomics from './components/tokenomics/Tokenomics';
import Sentiment from './components/sentiment/Sentiment';
import CryptoDashboard from './components/CryptoDashboard/CryptoDashboard';
import Sidebar from './components/sidebar/Sidebar';
import CryptoMetrics from './components/CryptoMetrics/CryptoMetrics';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='app-container'>
     <div>
     <CryptoDashboard />
     <CryptoMetrics />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
     </div>
      <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
