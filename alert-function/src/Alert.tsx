import React, { useState } from 'react';

interface AlertProps {
  text:string;
  color:string 
}

const Alert: React.FC<AlertProps> = ({text,color}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleShowAlert} className="btn btn-primary">
        Show
      </button>
      {showAlert && (
        <div className={`alert alert-${color} alert-dismissible`} role="alert">
          {text}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleCloseAlert}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Alert;