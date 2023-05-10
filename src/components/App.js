import React, {useState} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';


const App = () => {
  const [page, setPage] = useState('Home')

  return (
    <div>
      <NavBar setPage={setPage} />
      <div>
      {
        {
          'Home': <Home />,
          'Projects': <Projects />,
          'Contact':<Contact />
        }[page]
      }
      </div>
    </div>
  );
}

export default App;