const fetchNotifications = require("../services/notificationService");
const sortNotificationsByPriority = require("../utils/priorityUtils");

const getPriorityNotifications = async (req, res) => {
  try {
    const notifications = await fetchNotifications();

    const topNotifications =
      await sortNotificationsByPriority(notifications);

    res.status(200).json({
      success: true,
      count: topNotifications.length,
      notifications: topNotifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getPriorityNotifications,
};