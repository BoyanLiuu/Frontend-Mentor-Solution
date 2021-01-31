import Home from './pages/Home';
import WebDesign from './pages/WebDesign';
import GraphicDesign from './pages/GraphicDesign';
import AppDesign from './pages/AppDesign';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// <WebDesign /><GraphicDesign /> <AppDesign /><About /><Locations />
//<Contact />
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/web" component={WebDesign} />
                <Route path="/graphic" component={GraphicDesign} />
                <Route path="/app" component={AppDesign} />
                <Route path="/about" component={About} />
                <Route path="/locations" component={Locations} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
