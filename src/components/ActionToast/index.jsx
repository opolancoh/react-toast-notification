/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./ActionToast.module.css";

const ActionToast = ({ action, subtitle, message, duration = 2000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      // clear timeout when the component unmounts
      console.log("clearing timeout");
      clearTimeout(timeoutID);
    };
  }, []);

  const actionType = (action) => {
    switch (action) {
      case "success":
        return {
          title: "SUCCESS",
          color: "#198754",
          icon: "bi-check-circle",
        };
      case "warning":
        return {
          title: "WARNING",
          color: "#ffc107",
          icon: "bi-exclamation-circle",
        };
      case "error":
        return {
          title: "ERROR",
          color: "#dc3545",
          icon: "bi-x-circle",
        };
      default:
        return {
          title: "INFO",
          color: "#0d6efd",
          icon: "bi-info-circle",
        };
    }
  };

  if (!show) return null;

  return createPortal(
    <div className="toast-container position-absolute p-3 top-0 end-0">
      <div
        className={`toast ${show ? "show" : "hide"}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          borderLeft: `4px solid ${actionType(action).color}`,
        }}
        data-bs-animation="true"
      >
        <div className={`toast-header ${message ? styles.toastHeader : ""}`}>
          <i
            className={`bi ${actionType(action).icon} me-2 fs-3`}
            style={{
              color: `${actionType(action).color}`,
            }}
          ></i>
          <strong
            className={`me-auto fs-6`}
            style={{
              color: `${actionType(action).color}`,
            }}
          >
            {actionType(action).title}
          </strong>
          <small>{subtitle}</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
        {message && <div className="toast-body">{message}</div>}
      </div>
    </div>,
    document.body
  );
};

ActionToast.propTypes = {
  action: PropTypes.oneOf(["success", "warning", "error", "info"]),
  message: PropTypes.string,
  subtitle: PropTypes.string,
  duration: PropTypes.number,
};

export default ActionToast;
