import { useEffect } from "react";

import { Button } from "component/kit/Button/Button";

import CloseIcon from "images/icons/CloseIcon";

import "./Modal.scss";

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal__content">
        <Button className="modal__close-btn" variant="text">
          <CloseIcon
            onClick={() => {
              onCloseModal();
            }}
          />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// Modal.propTypes = {
//   children: PropTypes.node,
//   onCloseModal: PropTypes.func,
// };
