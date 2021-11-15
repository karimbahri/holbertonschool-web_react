import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";

import holberton_logo from "../holberton_logo.jpg";

function footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  );
}

export default footer;
