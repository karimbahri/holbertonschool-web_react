import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";

import holberton_logo from "../holberton_logo.jpg";

function App() {
  return
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
}

export default App;
