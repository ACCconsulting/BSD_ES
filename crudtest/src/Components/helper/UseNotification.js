import React from "react";
import { notification } from "antd";
export default function UseNotification() {
  const notificacion = (type, title, descripcion) => {
    return notification[type]({
      message: title,
      description: descripcion,
    });
  };

  return {
    notificacion,
  };
}
