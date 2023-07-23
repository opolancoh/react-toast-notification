import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Toast = ({ title, subtitle, message, duration = 2000, iconHtml }) => {
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

  if (!show) return null;

  return createPortal(
    <div className="toast-container position-absolute p-3 top-0 end-0">
      <div
        className={`toast ${show ? "show" : "hide"}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          {iconHtml}
          <strong className="me-auto">{title}</strong>
          <small>{subtitle}</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>,
    document.body
  );
};

Toast.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  iconHtml: PropTypes.element,
};

export default Toast;
