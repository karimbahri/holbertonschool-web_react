import React from "react";
import "./Notifications.css";
import closeIcon from "../close-icon.png";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";

function Notifications () {
  return (
    <div className="Notifications" style={{
      display: "flex"
    }}>
      <div className="notification-body-container">
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} / >
        </ul>
      </div>
      
      <button
        aria-label="close"
        onClick={() => {
          console.log("Close button has been clicked");
        }}
        style={{
          margin: "5px 2px auto auto" ,
          border: 'None',
          background: 'transparent'
        }}
      >
        <img alt="x" src={closeIcon} width={25} height={25} />
      </button>
      
    </div>
  );
};

export default Notifications;