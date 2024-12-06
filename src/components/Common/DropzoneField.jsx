import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import addFile from "@/assets/icon_Address_Card_.png";
import { spliceString } from "../../utils";
import { RiDeleteBinLine } from "react-icons/ri";

const DropzoneField = (props) => {
  const { htmlFor, handleOnChange, value, title = "file" } = props;
  const [file, setFile] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
  }, []);
  useEffect(() => {
    if (file?.length) {
      handleOnChange(file[0]);
    }
  }, [file]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    isFocus: true,
    onDrop,
    accept: { "image/*": [], "application/pdf": [] },
  });

  return (
    <div className="anvImg_selecTor">
      {file?.length || value ? (
        <div className="kyc_delIconDiv">
          <span>
            <RiDeleteBinLine
              className="kyc_delIcon"
              onClick={() => {
                setFile();
                handleOnChange("");
              }}
            />
          </span>
        </div>
      ) : (
        ""
      )}
      <div {...getRootProps()}>
        <div>
          <input autoFocus {...getInputProps()} />
          <label
            htmlFor={htmlFor}
            className={isDragActive ? "drag_active " : ""}
          >
            <div>
              <img src={addFile} alt="" />
            </div>
            <div className="drpFile_pr">
              {file?.length > 0 || value ? (
                <>
                  <p>
                    {value
                      ? spliceString(title, 0, 20)
                      : spliceString(file[0].name, 0, 20, "", ".")}
                  </p>
                  <span className="kyc_delIcon">Change</span>
                </>
              ) : (
                <p>
                  Drop file here or <span>Click to upload</span>
                </p>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DropzoneField;
