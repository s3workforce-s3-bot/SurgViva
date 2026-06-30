const QUESTION_BANK_VERSION = 2;
const STORAGE_KEY = 'surgviva-question-bank-v1';
const STORAGE_VERSION_KEY = 'surgviva-question-bank-version-v1';
const ROOM_STORAGE_KEY = 'surgviva-room-code-v1';
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDgXhR0ncdpk8IYlWfY6A3MKrR8j3f0M0A',
  authDomain: 'surgviva-demo.firebaseapp.com',
  databaseURL: 'https://surgviva-demo-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'surgviva-demo',
  storageBucket: 'surgviva-demo.firebasestorage.app',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abcdef1234567890'
};

const app = document.getElementById('app');
const homeScreen = document.getElementById('home-screen');
const examinerScreen = document.getElementById('examiner-screen');
const studentScreen = document.getElementById('student-screen');
const editorScreen = document.getElementById('editor-screen');
const examinerSubjects = document.getElementById('examiner-subjects');
const examinerQuestions = document.getElementById('examiner-questions');
const examinerPreview = document.getElementById('examiner-preview');
const studentDisplay = document.getElementById('student-display');
const editorForm = document.getElementById('question-editor-form');
const editorSubjectSelect = document.getElementById('editor-subject');
const editorQuestionSelect = document.getElementById('editor-question');
const editorIdInput = document.getElementById('editor-id');
const editorTitleInput = document.getElementById('editor-title');
const editorDisplayInput = document.getElementById('editor-display');
const editorStatus = document.getElementById('editor-status');
const addQuestionButton = document.getElementById('add-question');
const deleteQuestionButton = document.getElementById('delete-question');
const resetQuestionsButton = document.getElementById('reset-questions');
const roomCodeInput = document.getElementById('room-code-input');
const connectRoomButton = document.getElementById('connect-room-btn');
const roomStatus = document.getElementById('room-status');
const globalRoomStatus = document.getElementById('global-room-status');

let currentSubject = null;
let currentQuestion = null;
let questionBank = loadQuestionBank();
let roomCode = localStorage.getItem(ROOM_STORAGE_KEY) || '';
let isExaminer = false;

if (roomCode) {
  roomCodeInput.value = roomCode;
}
let firebaseApp = null;
let database = null;
let roomRef = null;
let roomConnected = false;

function cloneQuestionBank(data) {
  return JSON.parse(JSON.stringify(data));
}

function loadQuestionBank() {
  const savedVersion = Number(localStorage.getItem(STORAGE_VERSION_KEY));
  if (savedVersion === QUESTION_BANK_VERSION) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.warn('Unable to parse saved question bank.', error);
      }
    }
  } else {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_VERSION_KEY, String(QUESTION_BANK_VERSION));
  }

  return cloneQuestionBank(SURG_VIVA_SUBJECTS);
}

function persistQuestionBank() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questionBank));
  localStorage.setItem(STORAGE_VERSION_KEY, String(QUESTION_BANK_VERSION));
}

function setRoomStatus(message) {
  if (roomStatus) {
    roomStatus.textContent = message;
  }

  if (globalRoomStatus) {
    globalRoomStatus.textContent = message;
  }
}

function initFirebase() {
  if (firebaseApp) {
    return;
  }

  try {
    firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
    database = firebase.database();
  } catch (error) {
    console.warn('Firebase initialization failed.', error);
    setRoomStatus('Firebase is not available in this browser session.');
  }
}

function connectToRoom() {
  const enteredCode = roomCodeInput.value.trim().toUpperCase();
  if (!enteredCode) {
    setRoomStatus('Enter a room code first.');
    return;
  }

  roomCode = enteredCode;
  localStorage.setItem(ROOM_STORAGE_KEY, roomCode);
  roomCodeInput.value = roomCode;
  initFirebase();

  if (!database) {
    return;
  }

  if (roomRef) {
    roomRef.off('value');
  }

  roomRef = database.ref(`rooms/${roomCode}`);
  roomConnected = true;
  setRoomStatus(`Connected to room ${roomCode}.`);

  roomRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log('Firebase room update:', roomCode, data);

    if (data && data.subject && data.question) {
      setRoomStatus(`Room ${roomCode} active — ${data.subject} ${data.question}`);
      currentSubject = questionBank.find((subject) => subject.name === data.subject) || null;
      currentQuestion = currentSubject?.questions.find((question) => question.id === data.question) || null;
      renderExaminerPreview();
      syncStudentView();
      return;
    }

    setRoomStatus(`Connected to room ${roomCode}. Waiting for examiner selection.`);
    currentSubject = null;
    currentQuestion = null;
    renderExaminerPreview();
    syncStudentView();
  }, (error) => {
    console.warn('Room subscription failed.', error);
    setRoomStatus('Unable to subscribe to room updates. Check Firebase access.');
  });

  if (isExaminer && currentQuestion) {
    syncToRoom();
  }
}

function syncToRoom() {
  if (!roomCode || !roomRef) {
    return;
  }

  if (!currentSubject || !currentQuestion) {
    return;
  }

  const payload = {
    subject: currentSubject.name,
    question: currentQuestion.id
  };

  console.log('Syncing room state:', roomCode, payload);
  roomRef.set(payload).then(() => {
    setRoomStatus(`Sent ${payload.subject} ${payload.question} to room ${roomCode}`);
  }).catch((error) => {
    console.warn('Failed to sync room state.', error);
    setRoomStatus('Unable to send question to room. Check Firebase access.');
  });
}

function showScreen(screenId) {
  [homeScreen, examinerScreen, studentScreen, editorScreen].forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenId);
  });
}

function renderExaminerPreview() {
  if (!currentQuestion || !currentSubject) {
    examinerPreview.hidden = true;
    examinerPreview.innerHTML = '';
    return;
  }

  examinerPreview.hidden = false;
  examinerPreview.innerHTML = `
    <p class="preview-label">Student view</p>
    <h3 class="preview-title">${currentSubject.name} • ${currentQuestion.id}</h3>
    <p class="preview-display">${currentQuestion.display}</p>
  `;
}

function renderSubjectCards() {
  examinerSubjects.innerHTML = '';
  examinerSubjects.classList.remove('question-list');
  examinerSubjects.classList.add('subject-list');
  examinerQuestions.hidden = true;
  examinerQuestions.innerHTML = '';
  examinerPreview.hidden = true;
  examinerPreview.innerHTML = '';

  questionBank.forEach((subject) => {
    const card = document.createElement('button');
    card.className = 'subject-card';
    if (currentSubject && currentSubject.name === subject.name) {
      card.classList.add('active');
    }

    card.innerHTML = `
      <div>
        <h3>${subject.name}</h3>
        <p>${subject.description}</p>
      </div>
      <span class="badge">${subject.questions.length} questions</span>
    `;

    card.addEventListener('click', () => {
      currentSubject = subject;
      currentQuestion = null;
      renderSubjectCards();
      renderQuestionCards();
      renderExaminerPreview();
      syncToRoom();
    });

    examinerSubjects.appendChild(card);
  });
}

function renderQuestionCards() {
  examinerQuestions.innerHTML = '';
  examinerQuestions.classList.remove('subject-list');
  examinerQuestions.classList.add('question-list');

  if (!currentSubject) {
    examinerQuestions.hidden = true;
    return;
  }

  examinerQuestions.hidden = false;

  const heading = document.createElement('div');
  heading.className = 'screen-toolbar';
  heading.innerHTML = `
    <button class="ghost-btn" data-action="subjects">← Subjects</button>
    <h2>${currentSubject.name}</h2>
  `;
  examinerQuestions.appendChild(heading);

  currentSubject.questions.forEach((question, index) => {
    const card = document.createElement('button');
    card.className = 'question-card';
    if (currentQuestion && currentQuestion.id === question.id) {
      card.classList.add('active');
    }

    card.innerHTML = `
      <div class="question-number">Q${index + 1}</div>
      <h3>${question.title}</h3>
    `;

    card.addEventListener('click', () => {
      currentQuestion = question;
      renderQuestionCards();
      renderExaminerPreview();
      syncStudentView();
      syncToRoom();
    });

    examinerQuestions.appendChild(card);
  });

  heading.querySelector('[data-action="subjects"]').addEventListener('click', () => {
    currentSubject = null;
    currentQuestion = null;
    renderSubjectCards();
    renderQuestionCards();
  });
}

function renderStudentDisplay() {
  studentDisplay.innerHTML = '';

  if (!currentQuestion) {
    studentDisplay.innerHTML = '<p class="student-waiting">Waiting for examiner...</p>';
    return;
  }

  const subjectName = currentSubject ? currentSubject.name : 'Current subject';
  const content = document.createElement('div');
  content.className = 'student-content';
  content.innerHTML = `
    <div class="student-meta">${subjectName} • ${currentQuestion.id}</div>
    <h3 class="student-title">${currentQuestion.title}</h3>
    <p class="student-question">${currentQuestion.display}</p>
  `;

  studentDisplay.appendChild(content);
}

function syncStudentView() {
  renderStudentDisplay();
  if (studentScreen.classList.contains('active')) {
    showScreen('student-screen');
  }
}

function renderQuestionEditor(preferredQuestionId = null) {
  const selectedSubject = questionBank.find((subject) => {
    return currentSubject ? subject.name === currentSubject.name : subject.name === editorSubjectSelect.value;
  }) || questionBank[0];

  if (!selectedSubject) {
    editorSubjectSelect.innerHTML = '';
    editorQuestionSelect.innerHTML = '';
    editorIdInput.value = '';
    editorTitleInput.value = '';
    editorDisplayInput.value = '';
    return;
  }

  editorSubjectSelect.innerHTML = questionBank
    .map((subject) => {
      const selected = subject.name === selectedSubject.name ? 'selected' : '';
      return `<option value="${subject.name}" ${selected}>${subject.name}</option>`;
    })
    .join('');

  const selectedQuestionId = preferredQuestionId || editorQuestionSelect.value || selectedSubject.questions[0]?.id;
  const selectedQuestion = selectedSubject.questions.find((question) => question.id === selectedQuestionId) || selectedSubject.questions[0];

  editorQuestionSelect.innerHTML = selectedSubject.questions
    .map((question, index) => {
      const selected = selectedQuestion && question.id === selectedQuestion.id ? 'selected' : '';
      return `<option value="${question.id}" ${selected}>${index + 1}. ${question.title}</option>`;
    })
    .join('');

  if (selectedQuestion) {
    editorIdInput.value = selectedQuestion.id;
    editorTitleInput.value = selectedQuestion.title;
    editorDisplayInput.value = selectedQuestion.display;
  }
}

function setEditorStatus(message, isError = false) {
  editorStatus.textContent = message;
  editorStatus.style.color = isError ? '#b54545' : 'var(--success)';
}

function saveQuestionEditor(event) {
  if (event) {
    event.preventDefault();
  }

  const subjectName = editorSubjectSelect.value;
  const subject = questionBank.find((item) => item.name === subjectName);
  const selectedQuestionId = editorQuestionSelect.value;
  const question = subject?.questions.find((item) => item.id === selectedQuestionId);

  if (!subject || !question) {
    setEditorStatus('Choose a valid subject and question.', true);
    return;
  }

  const updatedId = editorIdInput.value.trim();
  const updatedTitle = editorTitleInput.value.trim();
  const updatedDisplay = editorDisplayInput.value.trim();

  if (!updatedId || !updatedTitle || !updatedDisplay) {
    setEditorStatus('Please complete all fields before saving.', true);
    return;
  }

  question.id = updatedId;
  question.title = updatedTitle;
  question.display = updatedDisplay;
  persistQuestionBank();

  currentSubject = subject;
  currentQuestion = question;
  renderSubjectCards();
  renderQuestionCards();
  renderExaminerPreview();
  syncStudentView();
  renderQuestionEditor(updatedId);
  setEditorStatus('Question updated successfully.');
}

function addQuestion() {
  const subjectName = editorSubjectSelect.value || questionBank[0]?.name;
  const subject = questionBank.find((item) => item.name === subjectName);

  if (!subject) {
    setEditorStatus('Select a subject before adding a question.', true);
    return;
  }

  const nextNumber = subject.questions.length + 1;
  const baseId = subject.name.substring(0, 1).toUpperCase();
  const newQuestion = {
    id: `${baseId}${String(nextNumber).padStart(2, '0')}`,
    title: `New Question ${nextNumber}`,
    display: 'Enter the student-facing display text for this question.'
  };

  subject.questions.push(newQuestion);
  persistQuestionBank();

  currentSubject = subject;
  currentQuestion = newQuestion;
  renderSubjectCards();
  renderQuestionCards();
  renderExaminerPreview();
  syncStudentView();
  renderQuestionEditor(newQuestion.id);
  setEditorStatus('New question added. Edit the fields and save.');
}

function deleteQuestion() {
  const subjectName = editorSubjectSelect.value || questionBank[0]?.name;
  const subject = questionBank.find((item) => item.name === subjectName);
  const selectedQuestionId = editorQuestionSelect.value;
  const questionIndex = subject?.questions.findIndex((item) => item.id === selectedQuestionId);

  if (!subject || questionIndex === undefined || questionIndex < 0) {
    setEditorStatus('Choose a valid question to delete.', true);
    return;
  }

  if (subject.questions.length === 1) {
    setEditorStatus('At least one question must remain in each subject.', true);
    return;
  }

  subject.questions.splice(questionIndex, 1);
  persistQuestionBank();

  currentSubject = subject;
  currentQuestion = subject.questions[0] || null;
  renderSubjectCards();
  renderQuestionCards();
  renderExaminerPreview();
  syncStudentView();
  renderQuestionEditor();
  setEditorStatus('Question deleted.');
}

function resetQuestionBank() {
  questionBank = cloneQuestionBank(SURG_VIVA_SUBJECTS);
  persistQuestionBank();
  currentSubject = questionBank[0];
  currentQuestion = currentSubject?.questions[0] || null;
  renderSubjectCards();
  renderQuestionCards();
  renderExaminerPreview();
  syncStudentView();
  renderQuestionEditor();
  setEditorStatus('Question bank reset to the default set.');
}

function handleAction(action) {
  isExaminer = action === 'examiner';

  if (action === 'examiner') {
    currentSubject = null;
    currentQuestion = null;
    renderSubjectCards();
    renderQuestionCards();
    showScreen('examiner-screen');
  } else if (action === 'student') {
    showScreen('student-screen');
  } else if (action === 'editor') {
    isExaminer = false;
    renderQuestionEditor();
    setEditorStatus('');
    showScreen('editor-screen');
  } else if (action === 'home') {
    currentSubject = null;
    currentQuestion = null;
    renderSubjectCards();
    renderQuestionCards();
    showScreen('home-screen');
  } else if (action === 'subjects') {
    currentSubject = null;
    currentQuestion = null;
    renderSubjectCards();
    renderQuestionCards();
    showScreen('examiner-screen');
  }
}

app.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  handleAction(button.getAttribute('data-action'));
});

editorForm.addEventListener('submit', saveQuestionEditor);
editorSubjectSelect.addEventListener('change', () => renderQuestionEditor());
editorQuestionSelect.addEventListener('change', () => renderQuestionEditor());
addQuestionButton.addEventListener('click', addQuestion);
deleteQuestionButton.addEventListener('click', deleteQuestion);
resetQuestionsButton.addEventListener('click', resetQuestionBank);
connectRoomButton.addEventListener('click', connectToRoom);
roomCodeInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    connectToRoom();
  }
});

renderSubjectCards();
renderQuestionCards();
renderExaminerPreview();
renderStudentDisplay();
renderQuestionEditor();
showScreen('home-screen');

if (roomCode) {
  connectToRoom();
}
