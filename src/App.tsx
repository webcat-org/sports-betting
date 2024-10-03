import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/pages/Home';
import About from '@/pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
