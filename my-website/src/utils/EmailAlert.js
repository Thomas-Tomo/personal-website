import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";

const EmailAlert = ({ notification, clearNotification }) => {
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification, clearNotification]);

  return (
    notification.message && (
      <Alert variant={notification.type}>{notification.message}</Alert>
    )
  );
};

export default EmailAlert;
