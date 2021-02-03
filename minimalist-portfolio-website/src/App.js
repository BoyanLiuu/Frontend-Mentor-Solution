import './main.scss';
import { Contact, Home, Portfolio, PortfolioDetail } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState } from 'react';
function App() {
    const [viewport, setViewport] = useState(window.innerWidth);

    window.addEventListener('resize', () => setViewport(window.innerWidth));

    let size = 'mobile';
    if (viewport > 768) size = 'tablet';
    if (viewport >= 1440) size = 'desktop';
    return (
        <Router>
            <Header />
            <main>
                <div className="container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Home viewport={size} />}
                        />
                        <Route
                            exact
                            path="/contact"
                            render={() => <Contact viewport={size} />}
                        />
                        <Route
                            exact
                            path="/portfolio"
                            render={() => <Portfolio viewport={size} />}
                        />
                        <Route
                            exact
                            path="/portfoliodetail"
                            component={PortfolioDetail}
                        />
                    </Switch>
                </div>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
