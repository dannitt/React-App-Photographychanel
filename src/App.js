import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext'; 
import { PhotoProvider } from './contexts/PhotoContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout'; 
import { Create } from './components/Create/Create';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { PhotoDetails } from './components/PhotoDetails/PhotoDetails';
import './App.css';
import { EditPhoto } from './components/EditPhoto/EditPhoto';


function App() {
  return (
    <AuthProvider>
      <PhotoProvider>

         <div className="App">
           <Header />

          <main>

          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
              <Route path='/create' element={<Create />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/catalog/:photoId' element={<PhotoDetails />} />
              <Route path='/catalog/:photoId/edit' element={<EditPhoto />} />


          </Routes>

          </main>

        <Footer />
      </div>
     </PhotoProvider>
    </AuthProvider>
  );
}

export default App;
