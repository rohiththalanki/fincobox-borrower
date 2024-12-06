import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillCheckCircle } from "react-icons/ai";
import "./kyc.css";

export function SuccessKYCModal(props) {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      className="anvKyc_tpModal"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Body className="kycProc_otrBdy">
        <>
          <div className="SucKYC_container">
            <div className="SucKYC_img">
              <AiFillCheckCircle className="SucKyc_icon" />
            </div>

            <p className="SucKYC_Congr8">Congratulations</p>
            <span className="SucKYC_msg">
              You've successfully submitted your KYC information.
            </span>
            <div className="SucKYC_subDiv d-flex mb-3 flex-column">
              <p className="SucKYC_nxt">Whats Next?</p>
              <p className="SucKYC_para">
                Your submission has been received and is currently being
                processed. We appreciate your cooperation and will notify you as
                soon as your account is fully verified.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="SucKYC_btn" onClick={handleClose}>
                Back to home
              </Button>
            </div>
          </div>
        </>
      </Modal.Body>
    </Modal>
  );
}
