import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import GenresPage from '../containers/HomePage';
import AuthorsPage from '../containers/HomePage';
import BooksPage from '../containers/HomePage';
import BooksReservePage from '../containers/HomePage';
import BooksLoanPage from '../containers/HomePage';
import BooksGatherPage from '../containers/HomePage';
import BooksMaintenancePage from '../containers/HomePage';
import BooksOutOfTimePage from '../containers/HomePage';

class AppStructure extends Component {

  render() {
    return (
      <div>
        <div>
            <ul>
              <li>A</li>
              <li>B</li>
            </ul>
        </div>
        <div>
          <Router>
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="/generos" component={GenresPage} />
              <Route path="/autores" component={AuthorsPage} />
              <Route path="/libros" component={BooksPage} />
              <Route path="/libros/reservar" component={BooksReservePage} />
              <Route path="/gestion/prestar" component={BooksLoanPage} />
              <Route path="/gestion/recoger" component={BooksGatherPage} />
              <Route path="/gestion/mantenimiento" component={BooksMaintenancePage} />
              <Route path="/gestion/fuera-plazo" component={BooksOutOfTimePage} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }

}

export default AppStructure;
