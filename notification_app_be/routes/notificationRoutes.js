const express = require("express");

const router = express.Router();

const {
  getPriorityNotifications,
} = require("../controllers/notificationController");

router.get(
  "/priority-notifications",
  getPriorityNotifications
);

module.exports = router;