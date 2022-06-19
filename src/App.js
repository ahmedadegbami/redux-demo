import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./components/Counter";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter teacher={"Ahmed"} />
        <Input />
      </header>
    </div>
  );
}

export default App;
