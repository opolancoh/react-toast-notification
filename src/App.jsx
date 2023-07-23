/* eslint-disable no-unused-vars */
import { useState } from "react";
import Toast from "./components/Toast";
import ActionToast from "./components/ActionToast";
import MinimalToast from "./components/MinimalToast";
import MinimalActionToast from "./components/MinimalActionToast";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [showSuccessActionToast, setShowSuccessActionToast] = useState(false);
  const [showWarningActionToast, setShowWarningActionToast] = useState(false);
  const [showErrorActionToast, setShowErrorActionToast] = useState(false);
  const [showInfoActionToast, setShowInfoActionToast] = useState(false);
  const [showMinimalToast, setShowMinimalToast] = useState(false);
  const [showMinimalSuccessActionToast, setShowMinimalSuccessActionToast] =
    useState(false);
  const [showMinimalWarningActionToast, setShowMinimalWarningActionToast] =
    useState(false);
  const [showMinimalErrorActionToast, setShowMinimalErrorActionToast] =
    useState(false);
  const [showMinimalInfoActionToast, setShowMinimalInfoActionToast] =
    useState(false);

  return (
    <>
      <main role="main" className="container">
        <h1 className="mt-5">Toast Notification Example</h1>

        <div className="row m-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowToast(true)}
            >
              Show Default Toast
            </button>
          </div>
        </div>

        <div className="row m-3">
          <div className="col">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowSuccessActionToast(true)}
              >
                Show Success Toast
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowWarningActionToast(true)}
              >
                Show Warning Toast
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowErrorActionToast(true)}
              >
                Show Error Toast
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowInfoActionToast(true)}
              >
                Show Info Toast
              </button>
            </div>
          </div>
        </div>

        <div className="row m-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowMinimalToast(true)}
            >
              Show Minimal Toast
            </button>
          </div>
        </div>

        <div className="row m-3">
          <div className="col">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowMinimalSuccessActionToast(true)}
              >
                Show Success Minimal Toast
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowMinimalWarningActionToast(true)}
              >
                Show Warning Minimal Toast
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowMinimalErrorActionToast(true)}
              >
                Show Error Minimal Toast
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setShowMinimalInfoActionToast(true)}
              >
                Show Info Minimal Toast
              </button>
            </div>
          </div>
        </div>
      </main>
      {showToast && (
        <Toast
          title="Bootstrap"
          subtitle="11 min ago"
          message="Hello, world! This is a toast message."
          duration={3000}
          iconHtml={
            <>
              <img src="" className="rounded me-2" alt="..." />
            </>
          }
        />
      )}
      {showSuccessActionToast && (
        <ActionToast
          action="success"
          message="Hello, world! This is a toast message."
          duration={3000}
        />
      )}
      {showWarningActionToast && (
        <ActionToast
          action="warning"
          message="Hello, world! This is a toast message."
          duration={3000}
        />
      )}
      {showErrorActionToast && (
        <ActionToast
          action="error"
          message="Hello, world! This is a toast message."
          duration={3000}
        />
      )}
      {showInfoActionToast && (
        <ActionToast
          action="info"
          message="Hello, world! This is a toast message."
          duration={3000}
        />
      )}
      {showMinimalToast && (
        <MinimalToast
          message="Hello, world! This is a toast message."
          duration={2000}
        />
      )}
      {showMinimalSuccessActionToast && (
        <MinimalActionToast
          action="success"
          message="Hello, world! This is a toast message."
          duration={2000}
        />
      )}
      {showMinimalWarningActionToast && (
        <MinimalActionToast
          action="warning"
          message="Hello, world! This is a toast message."
          duration={2000}
        />
      )}
      {showMinimalErrorActionToast && (
        <MinimalActionToast
          action="error"
          message="Hello, world! This is a toast message."
          duration={2000}
        />
      )}
      {showMinimalInfoActionToast && (
        <MinimalActionToast
          action="info"
          message="Hello, world! This is a toast message."
          duration={2000}
        />
      )}
    </>
  );
}

export default App;
