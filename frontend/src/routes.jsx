import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import { Login } from './pages/login/index';
import { Cadastro } from './pages/cadastro/index';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path='/cadastro' component={Cadastro}/>
    </BrowserRouter>
);

export default Routes;