import React, { useState } from 'react';
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from 'reactstrap';

function ConfirmModal(props) {
  const { className, isOpen, toggle, onSubmit } = props;

  return (
    <div>
      {/* <Modal
        size='md'
        isOpen={isOpen}
        toggle={toggle}
        className={className}
        backdrop
        keyboard
      >
        <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete ?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>{' '}
          <Button color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
}


export default ConfirmModal;