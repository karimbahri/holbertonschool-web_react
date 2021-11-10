import "./Header.css";
import { getFullYear, getFooterCopy } from "../utils";

import holberton_logo from "../holberton_logo.jpg";

function App() {
  return <div className="App-header">
      <img src={holberton_logo} alt="holberton" height={200} width={"200"}/>
      <h1>School dashboard</h1>
    </div>
}

export default App;
