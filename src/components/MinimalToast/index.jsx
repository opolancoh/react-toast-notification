import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const MinimalToast = ({ message, duration = 3000 }) => {
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
        className={`toast align-items-center ${show ? "show" : "hide"}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
      </div>
    </div>,
    document.body
  );
};

MinimalToast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

export default MinimalToast;
