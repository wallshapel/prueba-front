import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Users from './components/users/Users';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='users' element={<Users />} />   
          <Route path='register' element={<Register />} />   
          <Route path='' element={<Users />} />   
          <Route path='*' element={<Users />} /> {/* `*` = any route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
