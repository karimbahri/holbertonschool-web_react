import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


App.defaultProps = {
    isLoggedIn: false
}

function App() {
    return <React.Fragment>
        <header>
            <Notification />
            <Header />
        </header>
        <body>
            {isLoggedIn && <CourseList />}
            {!isLoggedIn && <Login />}
        </body>
        <footer>
            <Footer />
        </footer>
    </React.Fragment>
}

export default App;
