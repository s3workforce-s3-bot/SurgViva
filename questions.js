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
    description: "10 viva questions",
    questions: [
      {
        id: "B01",
        title: "Breast Anatomy",
        display:
          "Discuss the anatomical features of the breast and explain their surgical significance in breast disease."
      },
      {
        id: "B02",
        title: "Breast Examination",
        display:
          "Describe the clinical examination of a breast lump, including inspection, palpation, and assessment of regional lymph nodes."
      },
      {
        id: "B03",
        title: "Fibroadenoma",
        display:
          "Discuss the clinical features and management of fibroadenoma in a young woman."
      },
      {
        id: "B04",
        title: "Fibrocystic Disease",
        display:
          "Explain the presentation and management of fibrocystic breast disease and how it is differentiated from malignancy."
      },
      {
        id: "B05",
        title: "Breast Cancer Screening",
        display:
          "Discuss the principles of screening for breast cancer and the role of mammography in different age groups."
      },
      {
        id: "B06",
        title: "Paget Disease",
        display:
          "Describe the clinical presentation and significance of Paget disease of the breast."
      },
      {
        id: "B07",
        title: "Mastectomy Types",
        display:
          "Compare simple mastectomy, modified radical mastectomy, and breast-conserving surgery."
      },
      {
        id: "B08",
        title: "Axillary Nodes",
        display:
          "Explain the importance of axillary lymph node assessment in breast cancer and the role of sentinel node biopsy."
      },
      {
        id: "B09",
        title: "Nipple Discharge",
        display:
          "Discuss the causes of nipple discharge and the diagnostic approach to a patient with this presentation."
      },
      {
        id: "B10",
        title: "Breast Abscess",
        display:
          "Describe the presentation, diagnosis, and treatment of a lactational breast abscess."
      }
    ]
  },
  {
    name: "Thyroid",
    description: "10 viva questions",
    questions: [
      {
        id: "T01",
        title: "Thyroid Anatomy",
        display:
          "Discuss the anatomy of the thyroid gland and explain the surgical importance of its relations to the recurrent laryngeal nerves."
      },
      {
        id: "T02",
        title: "Goitre Examination",
        display:
          "Describe the clinical examination of a patient with goitre, including the features you would look for on inspection and palpation."
      },
      {
        id: "T03",
        title: "Diffuse Goitre",
        display:
          "Discuss the causes and management of diffuse goitre, including thyroid function assessment."
      },
      {
        id: "T04",
        title: "Nodular Goitre",
        display:
          "Explain the evaluation of a solitary thyroid nodule and the role of fine-needle aspiration cytology."
      },
      {
        id: "T05",
        title: "Thyroid Cancer",
        display:
          "Describe the common types of thyroid cancer and explain how they differ clinically and histologically."
      },
      {
        id: "T06",
        title: "Thyroidectomy",
        display:
          "Discuss the indications for thyroidectomy and the key steps in the operation."
      },
      {
        id: "T07",
        title: "Complications of Thyroidectomy",
        display:
          "List the major complications of thyroidectomy and explain how they arise."
      },
      {
        id: "T08",
        title: "Parathyroid Relations",
        display:
          "Explain the relationship of the parathyroid glands to the thyroid and discuss why this is important during surgery."
      },
      {
        id: "T09",
        title: "Retrosternal Goitre",
        display:
          "Discuss the clinical features and surgical concerns associated with a retrosternal goitre."
      },
      {
        id: "T10",
        title: "Thyrotoxicosis",
        display:
          "Describe the clinical features of thyrotoxicosis and the preoperative preparation of a patient for thyroid surgery."
      }
    ]
  }
];
