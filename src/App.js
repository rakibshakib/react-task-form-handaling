import './App.css';
import { FromContext } from './context/Context';
import useFromData from './context/useFromData';
import Home from './page/Home/Home';

function App() {
    const data = useFromData();
    return (
        <FromContext.Provider value={data}>
            <div className="App">
                <Home />
            </div>
        </FromContext.Provider>
    );
}

export default App;
