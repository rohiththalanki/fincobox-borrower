export const kycStatus = {
  incomplete: {
    label: "Incomplete",
    value: "incomplete",
  },
  submitted_for_review: {
    label: "In Review",
    value: "submitted_for_review",
  },
  input_required: {
    label: "Input required",
    value: "input_required",
  },
  completed: {
    label: "Completed",
    value: "completed",
  },
};

export const kycVerifiedStatus = [
  {
    label: "Approve",
    value: "approve",
  },
  {
    label: "Reject",
    value: "reject",
  },
];

export const businessKycCompanyType = [
  {
    label: "Listed or unlisted",
    value: "listed_or_unlisted",
  },
  {
    label: "Partnership firm",
    value: "partnership_firm",
  },
  {
    label: "Trust and foundation",
    value: "trust_and_foundation",
  },
  {
    label: "Proprietorship concerns",
    value: "proprietorship_concerns",
  },
];

export const businessKycBusinessSegment = [
  {
    label: "Manufacturing",
    value: "manufacturing",
  },
  {
    label: "Services",
    value: "services",
  },
  {
    label: "Trading",
    value: "trading",
  },
];

export const businessKycSmeSegment = [
  {
    label: "Partnership firm",
    value: "partnership_firm",
  },
  {
    label: "Marco",
    value: "marco",
  },
  {
    label: "Micro",
    value: "micro",
  },
];

export const businessKycIndustrySector = [
  {
    label: "Production crops",
    value: "production_crops",
  },
  {
    label: "Production livestock",
    value: "production_livestock",
  },
];
export const kycCTabMenu = [
  {
    label: "PERSONAL KYC",
    value: "Individual",
    submenu: [
      {
        label: "Personal Information",
        value: "gnl_info",
        id: 1,
        filed: [
          "first_name",
          "last_name",
          "email",
          "occupation",
          "nationality",
        ],
      },
      {
        label: "Residential Address",
        value: "addrs",
        id: 2,
        filed: ["address", "city", "po_box", "address_proof"],
      },
      {
        label: "Document Verification",
        value: "doc_verify",
        id: 3,
        filed: [
          "emirates_id_number",
          "emirates_id_expiry_date",
          "emirates_id_front",
          "emirates_id_back",
          "passport_number",
          "passport_issue_date",
          "passport_expiry_date",
          "passport_front",
          "passport_back",
        ],
      },
    ],
  },
  {
    label: "BUSINESS KYC",
    value: "Business",
    submenu: [
      {
        label: "Incorporation Detail",
        value: "incorp_detail",
        id: 4,
        filed: [
          "bussiness_name",
          "company_type",
          "bussiness_segment",
          "sme_segment",
          "sme_segment",
          "industry_sector",
          "tin_number",
          "business_document",
          "business_type",
          "business_city",
          "business_po_box",
          "business_address",
        ],
      },
    ],
  },
];

export const platformList = [
  { value: "amazon", label: "Amazon" },
  { value: "noon", label: "Noon" },
  { value: "talabaat", label: "Talabaat" },
];

export const financingList = [
  { value: "invoice", label: "Invoice" },
  { value: "revenue", label: "Revenue" },
  { value: "inventory", label: "Inventory" },
];
