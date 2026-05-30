const Log = require("../../logging-middleware");

const sortNotificationsByPriority = async (notifications) => {
  await Log(
    "backend",
    "info",
    "utils",
    "Sorting notifications by priority"
  );

  const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const sortedNotifications = notifications.sort((a, b) => {
    const priorityDifference =
      priorityMap[b.Type] - priorityMap[a.Type];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });

  return sortedNotifications.slice(0, 10);
};

module.exports = sortNotificationsByPriority;