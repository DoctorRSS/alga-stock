import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomeView from '../../views/HomeView';
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';


//Orientacoes importantes: a palavra exact nao e mais necessaria a partir da v6 do react dom, pode remover ela e teremos o mesmo efeito desejado
// O mesmo vale para a palavra conponent, que foi substituida pela palavra element
// fonte https://stackoverflow.com/questions/69866581/property-exact-does-not-exist-on-type e https://reactrouter.com/docs/en/v6/upgrading/v5

//Outra alteracao importante é o Switch ser substituipo pelo Routes nesta versao
//Fonte https://ateliware.com/blog/react-router e https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={HomeView} />
          <Route path="/login"  element={LoginView} />
          <Route element={NotFoundView}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;