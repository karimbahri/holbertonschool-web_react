import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications';

function App() {
    return <React.Fragment>
        <header>
            <Notification />
            <Header />
        </header>
        <body>
            <Login />
        </body>
        <footer>
            <Footer />
        </footer>
    </React.Fragment>
}

export default App;
