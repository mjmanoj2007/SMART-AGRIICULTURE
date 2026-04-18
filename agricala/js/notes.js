// Firestore Notes implementation with LocalStorage fallback string

let firestoreDB = null;
const LOCAL_NOTES_KEY = 'agri_notes';

window.initNotes = function(userEmail) {
  if (CONFIG.FIREBASE.apiKey !== "YOUR_FIREBASE_API_KEY") {
    try {
      firestoreDB = firebase.firestore();
    } catch(e) {
      console.warn("Firestore init failed, falling back to local storage");
    }
  }
  
  renderNotes();
  
  document.getElementById("save-note-btn").addEventListener("click", () => {
    const textEl = document.getElementById("new-note-text");
    const val = textEl.value.trim();
    if(val) {
      saveNote(val);
      textEl.value = "";
    }
  });
};

function saveNote(text) {
  const note = {
    id: Date.now().toString(),
    text: text,
    timestamp: Date.now()
  };
  
  if (firestoreDB && !window.State.offline) {
    // Save to Firebase
    firestoreDB.collection('users').doc(window.State.user.uid).collection('notes').doc(note.id).set(note)
    .then(() => {
      showToast("Note saved to cloud", "success");
      appendToDOM(note);
    }).catch(e => {
       showToast("Failed to save cloud note.", "error");
    });
  } else {
    // Save locally
    let notes = JSON.parse(localStorage.getItem(LOCAL_NOTES_KEY) || '[]');
    notes.unshift(note);
    localStorage.setItem(LOCAL_NOTES_KEY, JSON.stringify(notes));
    showToast("Note saved locally", "success");
    renderNotes();
  }
}

function deleteNote(id) {
  if (firestoreDB && !window.State.offline) {
    firestoreDB.collection('users').doc(window.State.user.uid).collection('notes').doc(id).delete()
    .then(() => {
      showToast("Note deleted", "info");
      document.getElementById(`note-${id}`).remove();
    });
  } else {
    let notes = JSON.parse(localStorage.getItem(LOCAL_NOTES_KEY) || '[]');
    notes = notes.filter(n => n.id !== id);
    localStorage.setItem(LOCAL_NOTES_KEY, JSON.stringify(notes));
    renderNotes();
  }
}

function renderNotes() {
  const container = document.getElementById("notes-container");
  container.innerHTML = "";
  
  if (firestoreDB && !window.State.offline) {
    // Fetch from Firebase
    if(window.State.user && window.State.user.uid) {
        firestoreDB.collection('users').doc(window.State.user.uid).collection('notes').orderBy('timestamp', 'desc').get()
        .then(snapshot => {
          snapshot.forEach(doc => appendToDOM(doc.data()));
        }).catch(()=> fallbackLocalRender());
    } else {
      fallbackLocalRender();
    }
  } else {
    fallbackLocalRender();
  }
}

function fallbackLocalRender() {
   let notes = JSON.parse(localStorage.getItem(LOCAL_NOTES_KEY) || '[]');
   const container = document.getElementById("notes-container");
   container.innerHTML = "";
   notes.forEach(note => appendToDOM(note));
}

function appendToDOM(note) {
  const container = document.getElementById("notes-container");
  const dateStr = new Date(note.timestamp).toLocaleString();
  
  const div = document.createElement("div");
  div.className = "note-card fade-enter";
  div.id = `note-${note.id}`;
  div.innerHTML = `
     <p class="note-date">${dateStr}</p>
     <p class="note-content">${note.text}</p>
     <button class="del-note-btn" onclick="deleteNote('${note.id}')"><i class="fa-solid fa-trash"></i></button>
  `;
  container.appendChild(div);
}
