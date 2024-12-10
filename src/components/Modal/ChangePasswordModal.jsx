import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { ChangePassword } from "../../pages/Auth/ChangePassword";

export function ChangePasswordModal(props) {
  const { isOpen, toggleModal } = props;

  return (
    <Modal isOpen={isOpen} toggle={() => toggleModal(false)}>
      <ModalHeader toggle={() => toggleModal(false)}>
        Change Password
      </ModalHeader>
      <ModalBody>
        <ChangePassword toggle={() => toggleModal(false)} />
      </ModalBody>
    </Modal>
  );
}
