import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  IsModalOpen,
  ModalCurrentState,
  SuccessMessage,
  UpdateHeaderExpand,
} from "../../../redux/reducer/CommonReducer";
import "./modal.css";

interface modalInterface {
  children: ReactNode;
  heading: string;
}

export default function ModalComponent(props: modalInterface) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal } = useSelector((state: any) => state.common);
  const onCloseModal = () => {
    dispatch(IsModalOpen(false));
    navigate("/");
    dispatch(ModalCurrentState("login"));
    dispatch(ErrorMessage(""));
    dispatch(SuccessMessage(""));
    dispatch(UpdateHeaderExpand(false));
  };
  return (
    <>
      {openModal ? (
        <Modal open={openModal} onClose={onCloseModal} center>
          <div className="modal-header">
            <h2 className="heading">{props.heading}</h2>
          </div>
          <div>{props.children}</div>
        </Modal>
      ) : (
        props.children
      )}
    </>
  );
}
