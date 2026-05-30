import React, { useEffect, useState } from "react";

import NotificationCard from "../components/NotificationCard";

import FilterBar from "../components/FilterBar";

import { getPriorityNotifications } from "../services/api";

import "../styles/dashboard.css";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);

  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data =
        await getPriorityNotifications();

      setNotifications(data.notifications);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.Type === filter
        );

  return (
    <div className="dashboard">
      <h1>Priority Notifications</h1>

      <FilterBar setFilter={setFilter} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredNotifications.map(
          (notification, index) => (
            <NotificationCard
              key={index}
              notification={notification}
            />
          )
        )
      )}
    </div>
  );
};

export default Dashboard;