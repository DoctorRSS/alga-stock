import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import ProductsView from '../../views/ProductsView';
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';


//Orientacoes importantes: a palavra exact nao e mais necessaria a partir da v6 do react dom, pode remover ela e teremos o mesmo efeito desejado
// O mesmo vale para a palavra conponent, que foi substituida pela palavra element
// fonte https://stackoverflow.com/questions/69866581/property-exact-does-not-exist-on-type e https://reactrouter.com/docs/en/v6/upgrading/v5

//Outra alteracao importante é o Switch ser substituipo pelo Routes nesta versao
//Fonte https://ateliware.com/blog/react-router e https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

//Outro ponto de correcao, utilizar as tags < /> para executar com o element

//Redirect foi substituido pelo Navigate no redirecionamento das paginas no react-router-dom v6
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route
        path="/"
        element={<Navigate to="/products" />}
        />
          <Route path="/products"  element={<ProductsView />} />
          <Route path="/products/:id"  element= {<ProductsView />} />
          <Route path="/login"  element={<LoginView />} />
          <Route path="/profile"  element={<ProfileView/>} />
          <Route path="*" element={<NotFoundView />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;