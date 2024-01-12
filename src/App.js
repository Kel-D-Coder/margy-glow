import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NavBar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='AboutPage' element={<AboutPage/>}/>
          <Route path='ContactPage' element={<ContactPage />} />
          <Route path='ProductPage' element={<ProductsPage />} />
          <Route path='detailsPage/:id' element={<DetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;