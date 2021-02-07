import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResizeContextProvider from './context/resize';
import { Home, About, Portfolio, Contact } from './pages';
import { Header, Footer } from './components';
import './main.scss';

const App = () => (
    <Router>
        <ResizeContextProvider>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </main>
            <Footer />
        </ResizeContextProvider>
    </Router>
);

export default App;
