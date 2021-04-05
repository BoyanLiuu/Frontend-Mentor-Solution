import HomePage from './components/pages/HomePage';

function App() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("In the app");
    console.log(isMobile);
    return <HomePage />;
}

export default App;
