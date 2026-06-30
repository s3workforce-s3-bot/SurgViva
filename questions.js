// Edit the question data below. The app reads this file directly, so changing questions later should not require UI code changes.
const SURG_VIVA_SUBJECTS = [
  {
    name: "Hernia",
    description: "24 viva questions",
    questions: [
      {
        id: "H01",
        title: "History summary",
        display: "Present the history and give a summary of the history."
      },
      {
        id: "H02",
        title: "General examination",
        display: "What will you look for during the general examination?"
      },
      {
        id: "H03",
        title: "Palpation & diagnosis",
        display:
          "Present your palpatory findings and give your provisional diagnosis."
      },
      {
        id: "H04",
        title: "Predisposing factors",
        display: "What are the predisposing factors of a hernia?"
      },
      {
        id: "H05",
        title: "Complications",
        display: "What are the complications of a hernia?"
      },
      {
        id: "H06",
        title: "Obstructed hernia",
        display: "What are the symptoms of an obstructed hernia?"
      },
      {
        id: "H07",
        title: "Strangulated hernia",
        display: "What are the symptoms of a strangulated hernia?"
      },
      {
        id: "H08",
        title: "Hernia vs Hydrocele",
        display: "How will you differentiate a hernia from a hydrocele?"
      },
      {
        id: "H09",
        title: "Direct vs Indirect",
        display:
          "How will you differentiate between a direct and an indirect inguinal hernia?"
      },
      {
        id: "H10",
        title: "Femoral vs Inguinal",
        display: "How will you differentiate between a femoral and an inguinal hernia?"
      },
      {
        id: "H11",
        title: "Enterocele vs Omentocele",
        display: "How will you differentiate between an enterocele and an omentocele?"
      },
      {
        id: "H12",
        title: "Deep ring test",
        display: "Describe the deep ring occlusion test."
      },
      {
        id: "H13",
        title: "Inguinal canal boundaries",
        display: "What are the boundaries of the inguinal canal?"
      },
      {
        id: "H14",
        title: "Inguinal canal contents",
        display: "What are the contents of the inguinal canal?"
      },
      {
        id: "H15",
        title: "Mid-inguinal point",
        display: "What is the mid-inguinal point and what is its significance?"
      },
      {
        id: "H16",
        title: "Hesselbach's triangle",
        display: "What are the boundaries of Hesselbach's triangle?"
      },
      {
        id: "H17",
        title: "Herniotomy",
        display: "Describe herniotomy."
      },
      {
        id: "H18",
        title: "Herniorrhaphy",
        display: "Describe herniorrhaphy."
      },
      {
        id: "H19",
        title: "Hernioplasty",
        display: "Describe hernioplasty."
      },
      {
        id: "H20",
        title: "Treatment of strangulated hernia",
        display: "How will you treat a strangulated hernia?"
      },
      {
        id: "H21",
        title: "Complications of hernioplasty",
        display: "What are the complications of hernioplasty?"
      }
    ]
  },
  {
    name: "Breast",
    description: "32 viva questions",
    questions: [
      {
        id: "B01",
        title: "History summary",
        display: "Present the history and give a summary of the history."
      },
      {
        id: "B02",
        title: "General examination",
        display: "What will you look for during the general examination?"
      },
      {
        id: "B03",
        title: "Palpation & diagnosis",
        display: "Present your palpatory findings and give your provisional diagnosis."
      },
      {
        id: "B04",
        title: "Recent nipple retraction",
        display: "What are the causes of recent onset nipple retraction?"
      },
      {
        id: "B05",
        title: "Nipple discharge",
        display: "What are the types of nipple discharge and their causes?"
      },
      {
        id: "B06",
        title: "Risk factors",
        display: "What are the risk factors for carcinoma breast?"
      },
      {
        id: "B07",
        title: "Breast cancer genes",
        display: "Which genes are involved in breast carcinoma?"
      },
      {
        id: "B08",
        title: "Malignant breast swelling",
        display: "What are the features of a malignant breast swelling?"
      },
      {
        id: "B09",
        title: "Nipple retraction anatomy",
        display: "Involvement of which anatomical structure causes nipple retraction?"
      },
      {
        id: "B10",
        title: "Skin tethering",
        display: "Involvement of which anatomical structure causes skin tethering (dimpling)?"
      },
      {
        id: "B11",
        title: "Peau d'orange",
        display: "Involvement of which anatomical structure causes peau d'orange appearance?"
      },
      {
        id: "B12",
        title: "Skin involvement",
        display: "What is meant by skin involvement with regard to TNM staging?"
      },
      {
        id: "B13",
        title: "Chest wall involvement",
        display: "What is meant by chest wall involvement with regard to TNM staging?"
      },
      {
        id: "B14",
        title: "Leaning forward",
        display: "What is the significance of asking the patient to lean forward during breast examination?"
      },
      {
        id: "B15",
        title: "Axillary lymph nodes",
        display: "What are the groups of axillary lymph nodes?"
      },
      {
        id: "B16",
        title: "Internal mammary nodes",
        display: "How do you examine the internal mammary lymph nodes?"
      },
      {
        id: "B17",
        title: "Breast lump investigations",
        display: "What are the investigations for a breast lump?"
      },
      {
        id: "B18",
        title: "Mammogram indications",
        display: "What are the indications for mammography?"
      },
      {
        id: "B19",
        title: "Trucut biopsy",
        display: "What are the uses of trucut biopsy?"
      },
      {
        id: "B20",
        title: "Metastasis workup",
        display: "What are the investigations for metastasis in carcinoma breast?"
      },
      {
        id: "B21",
        title: "TNM staging",
        display: "Describe the TNM staging of breast carcinoma."
      },
      {
        id: "B22",
        title: "Treatment options",
        display: "What are the various treatment options for carcinoma breast?"
      },
      {
        id: "B23",
        title: "Hormone therapy",
        display: "What are the indications for hormone therapy?"
      },
      {
        id: "B24",
        title: "MRM",
        display: "Which structures are removed in a modified radical mastectomy?"
      },
      {
        id: "B25",
        title: "BCS indications",
        display: "What are the indications for breast conservation surgery?"
      },
      {
        id: "B26",
        title: "BCS contraindications",
        display: "What are the contraindications for breast conservation surgery?"
      },
      {
        id: "B27",
        title: "Neoadjuvant chemotherapy",
        display: "What are the indications for neoadjuvant chemotherapy?"
      },
      {
        id: "B28",
        title: "Chemotherapy indications",
        display: "What are the indications for chemotherapy?"
      },
      {
        id: "B29",
        title: "Chemotherapy drugs",
        display: "Which drugs are commonly used in chemotherapy for breast carcinoma?"
      },
      {
        id: "B30",
        title: "Chemotherapy side effects",
        display: "What are the side effects of chemotherapy?"
      },
      {
        id: "B31",
        title: "Radiotherapy indications",
        display: "What are the indications for radiotherapy?"
      },
      {
        id: "B32",
        title: "Triple assessment",
        display: "What is the triple assessment of carcinoma breast?"
      }
    ]
  },
  {
    name: "Thyroid",
    description: "40 viva questions",
    questions: [
      {
        id: "T01",
        title: "History summary",
        display: "Present the history and give a summary of the history."
      },
      {
        id: "T02",
        title: "General examination",
        display: "What will you look for during the general examination?"
      },
      {
        id: "T03",
        title: "Palpation & diagnosis",
        display: "Present your palpatory findings and give your provisional diagnosis."
      },
      {
        id: "T04",
        title: "Pressure effects",
        display: "Name the pressure effects of thyroid swelling and their causes."
      },
      {
        id: "T05",
        title: "Hyperthyroidism symptoms",
        display: "What are the symptoms of hyperthyroidism?"
      },
      {
        id: "T06",
        title: "Swellings moving with deglutition",
        display: "Name the swellings that move with deglutition."
      },
      {
        id: "T07",
        title: "Eye signs",
        display: "Explain the pathophysiology of eye signs in thyroid disease."
      },
      {
        id: "T08",
        title: "Retrosternal extension",
        display: "What are the signs of retrosternal extension?"
      },
      {
        id: "T09",
        title: "Carotid pulse",
        display: "What is the significance of examining the carotid pulse in thyroid disease?"
      },
      {
        id: "T10",
        title: "Solitary thyroid nodule",
        display: "What are the causes of a solitary thyroid nodule?"
      },
      {
        id: "T11",
        title: "Multinodular goitre",
        display: "Explain the pathophysiology of multinodular goitre."
      },
      {
        id: "T12",
        title: "Primary thyrotoxicosis",
        display: "What are the clinical features of primary thyrotoxicosis?"
      },
      {
        id: "T13",
        title: "Secondary thyrotoxicosis",
        display: "What are the clinical features of secondary thyrotoxicosis?"
      },
      {
        id: "T14",
        title: "Graves' disease",
        display: "Explain the pathophysiology of Graves' disease."
      },
      {
        id: "T15",
        title: "Thyroid tumor classification",
        display: "Classify thyroid tumors."
      },
      {
        id: "T16",
        title: "STN investigations",
        display: "What are the investigations for a solitary thyroid nodule?"
      },
      {
        id: "T17",
        title: "Toxic diffuse goitre investigations",
        display: "What are the investigations for toxic diffuse goitre?"
      },
      {
        id: "T18",
        title: "USG uses",
        display: "What are the uses of ultrasonography (USG) in thyroid disease?"
      },
      {
        id: "T19",
        title: "FNAC uses",
        display: "What are the uses of FNAC in thyroid swellings?"
      },
      {
        id: "T20",
        title: "Radioiodine scan",
        display: "What are the uses of a radioiodine scan?"
      },
      {
        id: "T21",
        title: "Spread of thyroid tumor",
        display: "What are the modes of spread of thyroid tumors?"
      },
      {
        id: "T22",
        title: "Papillary carcinoma",
        display: "What are the features of papillary carcinoma of the thyroid?"
      },
      {
        id: "T23",
        title: "Papillary FNAC",
        display: "What are the FNAC features of papillary carcinoma?"
      },
      {
        id: "T24",
        title: "Follicular carcinoma",
        display: "What are the features of follicular carcinoma of the thyroid?"
      },
      {
        id: "T25",
        title: "Follicular FNAC",
        display: "What are the FNAC features of follicular carcinoma?"
      },
      {
        id: "T26",
        title: "Colloid goitre FNAC",
        display: "What are the FNAC findings in colloid goitre?"
      },
      {
        id: "T27",
        title: "Thyroid surgeries",
        display: "What are the different surgeries performed for thyroid swelling?"
      },
      {
        id: "T28",
        title: "Near-total thyroidectomy",
        display: "Describe near-total thyroidectomy."
      },
      {
        id: "T29",
        title: "Hemithyroidectomy",
        display: "Describe hemithyroidectomy."
      },
      {
        id: "T30",
        title: "Total thyroidectomy",
        display: "Describe total thyroidectomy."
      },
      {
        id: "T31",
        title: "Subtotal thyroidectomy",
        display: "Describe subtotal thyroidectomy."
      },
      {
        id: "T32",
        title: "Hypoparathyroidism symptoms",
        display: "What are the symptoms of hypoparathyroidism?"
      },
      {
        id: "T33",
        title: "Thyroidectomy complications",
        display: "What are the complications of thyroidectomy?"
      },
      {
        id: "T34",
        title: "Hypocalcaemia treatment",
        display: "How will you treat hypocalcaemia after thyroidectomy?"
      },
      {
        id: "T35",
        title: "Papillary node management",
        display: "How will you treat lymph node metastasis in papillary carcinoma of the thyroid?"
      },
      {
        id: "T36",
        title: "Post-op papillary carcinoma",
        display: "What is the postoperative treatment of papillary carcinoma of the thyroid?"
      },
      {
        id: "T37",
        title: "Graves' treatment",
        display: "What are the treatment options for Graves' disease?"
      },
      {
        id: "T38",
        title: "MNG treatment",
        display: "How will you treat multinodular goitre?"
      },
      {
        id: "T39",
        title: "Pre-op thyroidectomy",
        display: "What is the preoperative evaluation before thyroidectomy?"
      },
      {
        id: "T40",
        title: "Bilateral RLN injury",
        display: "What happens when both recurrent laryngeal nerves are injured?"
      }
    ]
  }
];
