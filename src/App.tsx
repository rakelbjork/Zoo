import '../src/components/style/Animals.css';
import { Layout } from './components/Animals/Layout';
import { Animals } from './components/Animals/Animals';
import { Animal } from './components/Animals/Animal';
import { NotFound } from './components/Animals/NotFound';
import { toggleList } from './FeedButton/ToggleList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { feed } from './FeedButton/Feed';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Animals />}></Route>
          <Route path="animal/:id" element={<Animal />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
