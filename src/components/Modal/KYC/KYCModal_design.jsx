import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select, { components } from 'react-select';
import Form from 'react-bootstrap/Form';
import arrImg from "@/assets/cst_whtArrow.png";
import addFile from "@/assets/icon_Address_Card_.png"
import DatePicker from "react-datepicker";
import './kyc.css'

export function KYCModal(props) {
    const { show, setShow } = props

    const { ValueContainer, Placeholder } = components;

    const CustomValueContainer = ({ children, ...props }) => {
        return (
            <ValueContainer {...props}>
                <Placeholder {...props} isFocused={props.isFocused}>
                    {props.selectProps.placeholder}
                </Placeholder>
                {React.Children.map(children, child =>
                    child && child.type !== Placeholder ? child : null
                )}
            </ValueContainer>
        );
    };

    const [StartDate, setStartDate] = useState(new Date())

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const abc = [
        { value: '1', label: 'Chocolate' },
        { value: '2', label: 'Strawberry' },
        { value: '3', label: 'Vanilla' }
    ]



    return (
        <Modal
            className='anvKyc_tpModal'
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="xl"
            centered
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">KYC Updation</Modal.Title>
            </Modal.Header>
            <Modal.Body
                className='kycProc_otrBdy'
            >
                <Tab.Container id="left-tabs-example" defaultActiveKey="gnl_info">
                    <div className='kycProc_sdBar'>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="gnl_info">General Information</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addrs">Address</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="doc_verify">Document Verification</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="incorp_detail">Incorporation Detail</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div className='kycProc_sdContent'>

                        <div className='kycContent_ht'>
                            <Tab.Content>
                                <Tab.Pane eventKey="gnl_info">
                                    <div className='_innerKyc_grid'>
                                        <div className='_inKycHead'>
                                            <h1>General Information</h1>
                                            <p>We need a few more details about you and your business to give you the best service.</p>
                                        </div>

                                        <div className='_inFr_flexBx'>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="First Name"
                                                className="_inInput_fx"
                                            >
                                                <Form.Control type="text" placeholder="First Name" />
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="floatingPassword"
                                                label="Last Name"
                                                className="_inInput_fx"
                                            >
                                                <Form.Control type="text" placeholder="Last Name" />
                                            </FloatingLabel>
                                        </div>

                                        <div className="businesType_bx">
                                            <div className="bsy_head">
                                                <h6>Business Type</h6>
                                            </div>

                                            <div className="businesType_otr">
                                                <div className="innrBsy_type active">
                                                    <div className='bsy_circle'>
                                                        <span></span>
                                                    </div>
                                                    <div className='bsy_para'>Individual</div>
                                                </div>

                                                <div className="innrBsy_type">
                                                    <div className='bsy_circle'>
                                                        <span></span>
                                                    </div>
                                                    <div className='bsy_para'>Business</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='_inFr_flexBx'>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email ID"
                                                className="_inInput_fx"
                                            >
                                                <Form.Control type="email" placeholder="Email ID" />
                                            </FloatingLabel>

                                            <div>

                                            </div>
                                        </div>

                                        <div className='_inFr_flexBx anvBas_select'>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isClearable
                                                placeholder="Occupation"
                                                options={abc}

                                                components={{
                                                    ValueContainer: CustomValueContainer
                                                }}

                                                styles={{
                                                    container: (provided, state) => ({
                                                        ...provided,
                                                        //   marginTop: 50
                                                    }),
                                                    valueContainer: (provided, state) => ({
                                                        ...provided,
                                                        overflow: "visible"
                                                    })
                                                }}
                                            />

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Nationality"
                                                className="_inInput_fx">
                                                <Form.Control type="text" placeholder="Nationality" />
                                            </FloatingLabel>
                                        </div>


                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="addrs">
                                    <div className='_innerKyc_grid'>
                                        <div className='_inKycHead'>
                                            <h1>Address Details</h1>
                                            <p>We need a few more details about you and your business to give you the best service.</p>
                                        </div>

                                        <div className='_inFr_flexBx'>
                                            <FloatingLabel controlId="floatingTextarea2" label="Address*" className='_inInput_fx fulWid'>
                                                <Form.Control

                                                    as="textarea"
                                                    placeholder="Address"
                                                    style={{ height: '61px' }}
                                                />
                                            </FloatingLabel>
                                        </div>

                                        <div className='_inFr_flexBx anvBas_select'>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isClearable
                                                placeholder="City"
                                                options={abc}
                                                label="City"
                                                components={{
                                                    ValueContainer: CustomValueContainer
                                                }}

                                                styles={{
                                                    container: (provided, state) => ({
                                                        ...provided,
                                                        //   marginTop: 50
                                                    }),
                                                    valueContainer: (provided, state) => ({
                                                        ...provided,
                                                        overflow: "visible"
                                                    })

                                                }}
                                            />

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Enter your PO BOX"
                                                className="_inInput_fx">
                                                <Form.Control type="text" placeholder="Enter your PO BOX" />
                                            </FloatingLabel>
                                        </div>

                                        <div className='_inFr_flexBx'>
                                            <div className="fileAdd_bx">
                                                <p>Proof of Residential Address in UAE*</p>
                                                <div className="_attachBx">
                                                    <label htmlFor="attach">
                                                        <div>
                                                            <img src={addFile} alt="" />
                                                        </div>
                                                        <div className='drpFile_pr'>Drop file here or <span>Click to upload</span> </div>
                                                    </label>
                                                    <Form.Control type="file" id="attach" />
                                                </div>
                                                <span className='fil_addBottom_para'>Ejari, Utility bill or bank statement from last 3 months</span>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="doc_verify">
                                    <div className='_innerKyc_grid ing_exMarg'>
                                        <div className='_inKycHead'>
                                            <h1>Document Verification</h1>
                                            <p>We need a few more details about you and your business to give you the best service.</p>
                                        </div>



                                        <div className='_inFr_flexBx'>

                                            <div className='_inInput_fx fulWid _upLine_head' style={{ flex: "0 0 100%" }}>
                                                <h4>Emirate ID's</h4>
                                            </div>


                                            <div className="fileAdd_bx">
                                                <p className='_upLoad_uPara'>Upload Emirates ID  (front) *</p>
                                                <div className="_attachBx">
                                                    <label htmlFor="attach_2">
                                                        <div>
                                                            <img src={addFile} alt="" />
                                                        </div>
                                                        <div className='drpFile_pr'>Drop file here or <span>Click to upload</span> </div>
                                                    </label>
                                                    <Form.Control type="file" id="attach_2" />
                                                </div>
                                            </div>

                                            <div className="fileAdd_bx">
                                                <p className='_upLoad_uPara'>Upload Emirates ID (Back) *</p>
                                                <div className="_attachBx">
                                                    <label htmlFor="attach_3">
                                                        <div>
                                                            <img src={addFile} alt="" />
                                                        </div>
                                                        <div className='drpFile_pr'>Drop file here or <span>Click to upload</span> </div>
                                                    </label>
                                                    <Form.Control type="file" id="attach_3" />
                                                </div>
                                            </div>


                                        </div>

                                        <div className='_inFr_flexBx'>

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Enter your Emirate ID"
                                                className="_inInput_fx"
                                            >
                                                <Form.Control type="text" placeholder="Enter your Emirate ID" />
                                            </FloatingLabel>

                                            <fieldset className="_anvDate_pickOuter_box">
                                                <label

                                                    htmlFor="Expiry_Date"
                                                    className={StartDate && "filled"}
                                                >
                                                    Expiry Date <span>*</span>
                                                </label>
                                                <DatePicker

                                                    id="Expiry_Date"
                                                    placeholderText="Expiry Date"
                                                    selected={StartDate}
                                                    startDate={StartDate}

                                                    onChange={(date) => setStartDate(date)}
                                                    dateFormat="dd-MMM-yyyy"
                                                />
                                                <i className="fa-regular fa-calendar"></i>
                                            </fieldset>


                                        </div>


                                        <div className='_inFr_flexBx'>

                                            <div className='_inInput_fx fulWid _upLine_head' style={{ flex: "0 0 100%" }}>
                                                <h4>Passport Details</h4>
                                            </div>


                                            <div className="fileAdd_bx">
                                                <p className='_upLoad_uPara'>Upload Passport page (Front) *</p>
                                                <div className="_attachBx">
                                                    <label htmlFor="attach_3">
                                                        <div>
                                                            <img src={addFile} alt="" />
                                                        </div>
                                                        <div className='drpFile_pr'>Drop file here or <span>Click to upload</span> </div>
                                                    </label>
                                                    <Form.Control type="file" id="attach_3" />
                                                </div>
                                            </div>

                                            <div className="fileAdd_bx">
                                                <p className='_upLoad_uPara'>Upload Passport page (Back) *</p>
                                                <div className="_attachBx">
                                                    <label htmlFor="attach_3">
                                                        <div>
                                                            <img src={addFile} alt="" />
                                                        </div>
                                                        <div className='drpFile_pr'>Drop file here or <span>Click to upload</span> </div>
                                                    </label>
                                                    <Form.Control type="file" id="attach_3" />
                                                </div>
                                            </div>


                                        </div>

                                        <div className='_inFr_flexBx'>

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Passport Number"
                                                className="_inInput_fx"
                                            >
                                                <Form.Control type="text" placeholder="Passport Number" />
                                            </FloatingLabel>

                                        </div>

                                        <div className='_inFr_flexBx'>
                                            <fieldset className="_anvDate_pickOuter_box">
                                                <label

                                                    htmlFor="passPort_issue"
                                                    className={StartDate && "filled"}
                                                >
                                                    Passport Issue Date <span>*</span>
                                                </label>
                                                <DatePicker

                                                    id="passPort_issue"
                                                    placeholderText="Passport Issue Date"
                                                    selected={StartDate}
                                                    startDate={StartDate}

                                                    onChange={(date) => setStartDate(date)}
                                                    dateFormat="dd-MMM-yyyy"
                                                />
                                                <i className="fa-regular fa-calendar"></i>
                                            </fieldset>

                                            <fieldset className="_anvDate_pickOuter_box">
                                                <label

                                                    htmlFor="passPort_expired"
                                                    className={StartDate && "filled"}
                                                >
                                                    Passport Expiry Date <span>*</span>
                                                </label>
                                                <DatePicker

                                                    id="passPort_expired"
                                                    placeholderText="Passport Expiry Date"
                                                    selected={StartDate}
                                                    startDate={StartDate}

                                                    onChange={(date) => setStartDate(date)}
                                                    dateFormat="dd-MMM-yyyy"
                                                />
                                                <i className="fa-regular fa-calendar"></i>
                                            </fieldset>
                                        </div>
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="incorp_detail">
                                    <div className='_innerKyc_grid ing_exMarg'>
                                        <div className='_inKycHead'>
                                            <h1>Incorporation details</h1>
                                            <p>We need a few more details about you and your business to give you the best service.</p>
                                        </div>



                                        <div className='_inFr_flexBx anvBas_select'>



                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Your Business Name"
                                                className="_inInput_fx" >
                                                <Form.Control type="text" placeholder="Your Business Name" />
                                            </FloatingLabel>


                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isClearable
                                                placeholder="Type of company*"
                                                options={abc}
                                                label="Type of company*"
                                                components={{
                                                    ValueContainer: CustomValueContainer
                                                }}

                                                styles={{
                                                    container: (provided, state) => ({
                                                        ...provided,
                                                        //   marginTop: 50
                                                    }),
                                                    valueContainer: (provided, state) => ({
                                                        ...provided,
                                                        overflow: "visible"
                                                    })

                                                }} />




                                        </div>

                                        <div className='_inFr_flexBx anvBas_select'>

                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isClearable
                                                placeholder="Select Business Segment*"
                                                options={abc}
                                                label="Select Business Segment*"
                                                components={{
                                                    ValueContainer: CustomValueContainer
                                                }}

                                                styles={{
                                                    container: (provided, state) => ({
                                                        ...provided,
                                                        //   marginTop: 50
                                                    }),
                                                    valueContainer: (provided, state) => ({
                                                        ...provided,
                                                        overflow: "visible"
                                                    })

                                                }} />

                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isClearable
                                                placeholder="Select SME Segment*"
                                                options={abc}
                                                label="Select SME Segment*"
                                                components={{
                                                    ValueContainer: CustomValueContainer
                                                }}

                                                styles={{
                                                    container: (provided, state) => ({
                                                        ...provided,
                                                        //   marginTop: 50
                                                    }),
                                                    valueContainer: (provided, state) => ({
                                                        ...provided,
                                                        overflow: "visible"
                                                    })

                                                }} />



                                        </div>

                                        <div className='_inFr_flexBx anvBas_select'>

                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                isClearable
                                                placeholder="Industry Sector*"
                                                options={abc}
                                                label="Industry Sector*"
                                                components={{
                                                    ValueContainer: CustomValueContainer
                                                }}

                                                styles={{
                                                    container: (provided, state) => ({
                                                        ...provided,
                                                        //   marginTop: 50
                                                    }),
                                                    valueContainer: (provided, state) => ({
                                                        ...provided,
                                                        overflow: "visible"
                                                    })

                                                }} />




                                        </div>


                                        <div className='_inFr_flexBx'>

                                            <div className='_inInput_fx fulWid _upLine_head' style={{ flex: "0 0 100%" }}>
                                                <p>Trade License or Certificate of incorporation / Partnership deed *</p>
                                            </div>


                                            <div className="fileAdd_bx">
                                                <div className="_attachBx">
                                                    <label htmlFor="attach_5">
                                                        <div>
                                                            <img src={addFile} alt="" />
                                                        </div>
                                                        <div className='drpFile_pr'>Drop file here or <span>Click to upload</span> </div>
                                                    </label>
                                                    <Form.Control type="file" id="attach_5" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className='_inFr_flexBx anvMrg_top'>

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Enter TIN Details"
                                                className="_inInput_fx _inTin_input"
                                            >
                                                <Form.Control type="text" placeholder="Enter TIN Details" />
                                                <p>TIN (need UAE equivalent) *</p>
                                            </FloatingLabel>

                                        </div>

                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>


                        <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button> */}
                            <Button variant="primary" className='anvSv_btn'>
                                <span>
                                    <span class="text-base">Save & Continue</span>
                                    <img src={arrImg} className='arrCon_btn' />
                                </span>

                            </Button>
                        </Modal.Footer>
                    </div>

                </Tab.Container>


            </Modal.Body>

        </Modal>
    )
}
