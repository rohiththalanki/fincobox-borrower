import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import "./kyc.css";
import { FloatingField } from "../../Common";
import DropzoneField from "../../Common/DropzoneField";
import { checkFormError } from "../../../utils";
import { invoiceFormSchema } from "../../../utils/error_schema";
import { createInvoiceRequest, deleteInvoiceRequest } from "../../../services";

const sectionObj = {
  invoice_number: "",
  invoice_files: "",
};

export function UploadInvoiceModal(props) {
  const { show, setShow, formValue, setFormValue, initialFormValue, loanId, callLoan } = props;
  const [inputError, setInputError] = useState("");
  const [error, setError] = useState("");
  const maxField = 20;
  const handleClose = () => {
    setShow(false);
    setInputError("");
    setError("");
  };

  const handleAddClick = (data) => {
    if (formValue?.length < maxField) {
      const optionList = [...formValue];
      optionList.push(sectionObj);
      setFormValue(optionList);
    } else {
      setError("Maximum limit reached. You cannot add more fields.");
    }
  };

  const handleRemoveClick = (index, data) => {
    const optionList = [...formValue];
    optionList.splice(index, 1);
    if (data?.id) {
      handleDelete(data?.id)
    }
    setFormValue(optionList);
    setError("");
  };

  const handleDelete = async (id) => {
    const resp = await deleteInvoiceRequest(id);
  };

  const updateInvoice = () => {
    const formData = new FormData();
    formValue?.map(async (item) => {
      if (typeof item?.invoice_files !== "string") {
        formData.append("invoice_number", item?.invoice_number);
        formData.append(
          "invoice_files",
          typeof item?.invoice_files === "string" ? null : item?.invoice_files
        );
        formData.append("loan_id", loanId);
        const resp = await createInvoiceRequest(formData);
        if (resp?.status === 201) {
          handleClose()
        }
      }
    });
  };


  const handleOnChange = async (name, value, index) => {
    setError("");
    const optionList = [...formValue];
    optionList.splice(index, 1, {
      ...optionList[index],
      [name]: value,
    });
    setFormValue(optionList);
    if (!!inputError) {
      const validationResult = await checkFormError(
        optionList,
        invoiceFormSchema
      );
      setInputError(validationResult);
    }
  };

  const handleSave = async () => {
    const validationResult = await checkFormError(formValue, invoiceFormSchema);
    if (validationResult === true) {
      if (loanId) {
        updateInvoice()
      }
      callLoan()
      handleClose();
    } else {
      setInputError(validationResult);
    }
  };

  const openFileInNewTab = (file) => {
    if (typeof file === "string") {
      window.open(file, "_blank");
    } else {
      const fileUrl = URL.createObjectURL(file); // Replace with the actual URL of your file
      window.open(fileUrl, "_blank");
    }
  };

  return (
    <Modal
      className="anvKyc_tpModal anvKyc_UpperModal"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Invoice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="kycProc_otrBdy">
        <div className="kycProc_sdContent w-100 mx-5 my-3">
          <div className="kycContent_ht">
            <div className="_innerKyc_grid">
              <div className="_inKycHead">
                {formValue?.map((item, i) => {
                  return (
                    <>
                      <div className="_inFr_flexBx align-items-end">
                        <FloatingField
                          controlId="floatingInput"
                          label="Invoice Number"
                          labelClass="_inInput_fx"
                          type="text"
                          placeholder="First Name"
                          name="invoice_number"
                          onChange={({ target: { name, value } }) =>
                            handleOnChange(name, value, i)
                          }
                          focus={!!inputError["[" + i + "].invoice_number"]}
                          error={inputError["[" + i + "].invoice_number"]}
                          value={item?.invoice_number}
                          errorClass="anvFlot_err"
                        />

                        <div className="fileAdd_bx anvDropFile">
                          <p className="_upLoad_uPara">Upload Invoice </p>
                          <div
                            className={
                              (inputError["[" + i + "].invoice_files"]
                                ? "error "
                                : "") + "_attachBx"
                            }
                          >
                            <DropzoneField
                              title={
                                item?.invoice_files === "string"
                                  ? item?.invoice_files
                                  : item?.invoice_files?.name
                              }
                              htmlFor="attach_2"
                              value={item?.invoice_files}
                              handleOnChange={(value) =>
                                handleOnChange("invoice_files", value, i)
                              }
                            />
                          </div>
                          {!!inputError["[" + i + "].invoice_files"] && (
                            <p className="dropFileErr invalid-feedback">
                              {inputError["[" + i + "].invoice_files"]}
                            </p>
                          )}
                        </div>
                        <div className="anvRemove_btn">
                          {item?.invoice_files && (
                            <span
                              className="invMod_eyeIcon"
                              onClick={() =>
                                openFileInNewTab(item?.invoice_files)
                              }
                            >
                              <MdRemoveRedEye />
                            </span>
                          )}

                          {formValue?.length > 1 && (
                            <span
                              className="invMod_delIcon"
                              onClick={() => handleRemoveClick(i, item)}
                            >
                              <MdDelete />
                            </span>
                          )}
                        </div>
                      </div>
                      {formValue?.length - 1 === i && (
                        <div className="p-2">
                          <button
                            className="invMod_addBtn"
                            onClick={() => handleAddClick(item)}
                          >
                            Add More +
                          </button>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button
          variant="secondary"
          className="anvSv_btn"
          onClick={() => {
            handleClose();
            setFormValue(initialFormValue);
          }}
        >
          <span className="text-base">cancel </span>
        </Button>
        <Button
          variant="primary"
          className="anvSv_btn"
          onClick={() => handleSave()}
        >
          <span className="text-base">Save </span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
