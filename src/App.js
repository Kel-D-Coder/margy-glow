import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './page/HomePage';
import { DetailsPage } from './page/DetailsPage';
import { BsmPage } from './page/BsmPage';
import { BsmPage1 } from './page/BsmPage(1)';
import { BbmPage } from './page/BbmPage';
import { GctPage } from './page/GctPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bsm-course' element={<BsmPage />} />
        <Route path='/bsm-course-2' element={<BsmPage1 />} />
        <Route path='/bbm-course' element={<BbmPage />} />
        <Route path='/gct-course' element={<GctPage />} />
        <Route path='/course/:id' element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
