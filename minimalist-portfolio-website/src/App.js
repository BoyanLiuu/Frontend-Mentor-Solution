import Home from './pages/Home';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// <WebDesign /><GraphicDesign /> <AppDesign /><About /><Locations />
//<Contact />
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
