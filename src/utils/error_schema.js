import * as Yup from "yup";
// const phoneRegExp =
//   /^(?:00971|\+971|0)?(?:50|51|52|55|56|58|2|3|4|6|7|9)\d{7}$/;

const noNumber = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("must be valid email")
    .required("Please enter email"),
  password: Yup.string().required("Please enter your password"),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  first_name: Yup.string()
    .matches(noNumber, "Must be an alphabet")
    .required("Please enter your first name"),
  last_name: Yup.string()
    .matches(noNumber, "Must be an alphabet")
    .required("Please enter your last name"),
  phone_number: Yup.string()
    // .matches(phoneRegExp, "Phone number is not valid")
    .min(8, "Phone number is not valid")
    .max(12, "Phone number is not valid")
    .required("Please enter your mobile"),
  user_type: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "minimum 6 characters required")
    .required("Please enter your password"),
  tnc: Yup.boolean("Please mark as read").oneOf([true], "Please mark as read"),
});

export const varificationSchema = Yup.object().shape({
  mobile_code: Yup.string()
    .min(3, "minimum 4 characters required")
    .required("Please enter mobile OTP"),
  email_code: Yup.string()
    .min(3, "minimum 4 characters required")
    .required("Please enter email OTP"),
});

export const chnagePasswordSchema = Yup.object().shape({
  old_password: Yup.string()
    .min(6, "minimum 6 characters required!")
    .required("Required"),
  new_password: Yup.string()
    .notOneOf(
      [Yup.ref("old_password")],
      "New password cannot be the same as old meme"
    )
    .min(6, "minimum 6 characters required!")
    .required("Required"),
  confirm_password: Yup.string()
    .min(6, "minimum 6 characters required")
    .required("Required")
    .oneOf([Yup.ref("new_password")], "Passwords do not match"),
});

export const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("must be valid email")
    .required("Please enter email"),
});

export const resetPasswordSchema = Yup.object().shape({
  code: Yup.string()
    .min(4, "minimum 4 characters required")
    .max(4, "maximum 4 characters required")
    .required("Please enter email OTP"),
  password: Yup.string()
    .min(6, "minimum 6 characters required!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .min(6, "minimum 6 characters required")
    .required("Required"),
});

// merchant: 3,
// merchant_type: "",
// bank_account_details: "",,
// status: "",

export const loanFormSchema = Yup.object().shape({
  // email: Yup.string()
  //   .email("must be valid email")
  //   .required("Please enter email"),
  // phone: Yup.string()
  //   // .matches(phoneRegExp, "Phone number is not valid")
  //   .min(8, "Phone number is not valid")
  //   .max(12, "Phone number is not valid")
  //   .required("Please enter your mobile"),
  platform: Yup.object() // for select
    .shape({
      value: Yup.string().required("Please select platform"),
    })
    .required("Please select platform"),
  type_of_finacing: Yup.object()
    .shape({
      value: Yup.string().required("Please select financing"),
    })
    .required("Please select financing"),
  // invoice: Yup.string().required("Please enter invoice number"),
  // upload_invoice: Yup.string().required("Please upload invoice"), //for dropbox
  // merchant_type: Yup.string().required("Required"), // for radio
  loan_amount_requested: Yup.string().required("Please enter loan amount"),
  disbursement_proposed_date: Yup.string().required(
    "Please enter disbursement proposed date"
  ),
  tenure: Yup.string().required("Please enter tenure"),
  beneficiary_account_title: Yup.string().required("Please enter bank name"),
  beneficiary_account_number: Yup.string().required(
    "Please enter account number"
  ),
  beneficiary_bank_name: Yup.string().required("Please enter beneficiary name"),
  swift_code: Yup.string().required("Please enter swift code"),
});

export const invoiceFormSchema = Yup.array().of(Yup.object().shape({
  invoice_number: Yup.string().required("Please enter invoice number"),
  invoice_files: Yup.string().required("Please upload invoice"), //for dropbox
}))


export const modalFormSchema = (type, type1) => {
  const generalValidation = {
    // first_name: Yup.string().required("Please enter first name"),
    // last_name: Yup.string().required("Please enter last name"),
    email: Yup.string()
      .email("must be valid email")
      .required("Please enter email"),
    occupation: Yup.object()
      .shape({
        value: Yup.string().required("Please select occupation"),
      })
      .required("Please select occupation"),
    nationality: Yup.object()
      .shape({
        value: Yup.string().required("Please select nationality"),
      })
      .required("Please select nationality"),
  };
  const addressValidation = {
    address: Yup.string().required("Please enter address"),
    city: Yup.object()
      .shape({
        value: Yup.string().required("Please select City"),
      })
      .required("Please select city"),
    po_box: Yup.string().required("Please enter PO Box"),
    address_proof: Yup.string().required("Please upload Address Proof"),
  };
  const documentValidation = {
    emirates_id_number: Yup.string().required("Please enter Emirate Id"),
    emirates_id_expiry_date: Yup.string().required("Please enter Expiry Date"),
    emirates_id_front: Yup.string().required("Please upload front side of ID"),
    emirates_id_back: Yup.string().required("Please upload back side of ID"),
    passport_number: Yup.string().required("Please enter Passport Number"),
    passport_issue_date: Yup.string().required(
      "Please enter Passport Issue Date"
    ),
    passport_expiry_date: Yup.string().required(
      "Please enter Passport Expire Date"
    ),
    passport_front: Yup.string().required(
      "Please upload front side of Passport"
    ),
    passport_back: Yup.string().required("Please upload back side of Passport"),
  };

  const incorporationValidation = {
    business_name: Yup.string().required("Please enter Business Name"),
    company_type: Yup.object()
      .shape({
        value: Yup.string().required("Please select Company Type"),
      })
      .required("Please select Company Type"),
    business_segment: Yup.object()
      .shape({
        value: Yup.string().required("Please select Business Segment"),
      })
      .required("Please select Business Segment"),
    sme_segment: Yup.object()
      .shape({
        value: Yup.string().required("Please select SME Segment"),
      })
      .required("Please select SME Segment"),
    industry_sector: Yup.object()
      .shape({
        value: Yup.string().required("Please select Industry Sector"),
      })
      .required("Please select Industry Sector"),
    tin_number: Yup.string().required("Please enter Tin Number"),
    business_document: Yup.string().required(
      "Please upload Trade License Or Partnership Deed"
    ),
  };
  switch (type) {
    case "gnl_info":
      return Yup.object().shape(generalValidation);
    case "addrs":
      return Yup.object().shape(addressValidation);
    case "doc_verify":
      if (type1 === "final") {
        return Yup.object().shape({
          ...addressValidation,
          ...documentValidation,
        });
      } else {
        return Yup.object().shape(documentValidation);
      }
    case "incorp_detail":
      if (type1 === "final") {
        return Yup.object().shape({
          ...addressValidation,
          ...documentValidation,
          ...incorporationValidation,
        });
      } else {
        return Yup.object().shape(incorporationValidation);
      }
  }
};
