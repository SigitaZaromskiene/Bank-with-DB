import "./App.scss";
import Nav from "./Components/Nav";
import Routes from "./Components/Routes";
import { GlobalProvider } from "./Components/Global";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Nav></Nav>
        <Routes />
      </div>
    </GlobalProvider>
  );
}

export default App;
