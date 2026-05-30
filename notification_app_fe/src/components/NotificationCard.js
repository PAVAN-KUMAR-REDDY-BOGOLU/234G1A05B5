import React from "react";

const NotificationCard = ({ notification }) => {
  return (
    <div className="notification-card">
      <h3>{notification.Title}</h3>

      <p>{notification.Message}</p>

      <span className="type">
        {notification.Type}
      </span>

      <p className="time">
        {new Date(
          notification.Timestamp
        ).toLocaleString()}
      </p>
    </div>
  );
};

export default NotificationCard;