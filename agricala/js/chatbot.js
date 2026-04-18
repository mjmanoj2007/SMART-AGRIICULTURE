// Tamil Voice AI Chatbot using Web Speech API

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isRecording = false;

document.addEventListener("DOMContentLoaded", () => {
  const micBtn = document.getElementById("mic-btn");
  const sendBtn = document.getElementById("send-msg-btn");
  const chatInput = document.getElementById("chat-input");

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'ta-IN'; // Tamil India
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
      isRecording = true;
      micBtn.classList.add("pulse-btn");
      micBtn.style.color = "red";
    };

    recognition.onresult = function (event) {
      const speechToText = event.results[0][0].transcript;
      chatInput.value = speechToText;
      processChat(speechToText);
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
      isRecording = false;
      micBtn.classList.remove("pulse-btn");
      micBtn.style.color = "";
      showToast("Voice input failed.", "warning");
    };

    recognition.onend = function () {
      isRecording = false;
      micBtn.classList.remove("pulse-btn");
      micBtn.style.color = "";
    };
  } else {
    micBtn.style.display = 'none'; // Hide if not supported
    showToast("Voice Input not supported in this browser.", "warning");
  }

  micBtn.addEventListener("click", () => {
    if (!recognition) return;
    if (isRecording) {
      recognition.stop();
    } else {
      // Toggle language based on App state
      recognition.lang = window.State.lang === 'ta' ? 'ta-IN' : 'en-US';
      recognition.start();
    }
  });

  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (text) {
      processChat(text);
      chatInput.value = "";
    }
  });

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = chatInput.value.trim();
      if (text) {
        processChat(text);
        chatInput.value = "";
      }
    }
  });
});

function processChat(userMsg) {
  appendMessage("user-msg", userMsg);

  // Simple Mock Intent Engine
  setTimeout(() => {
    let reply = "மன்னிக்கவும், எனக்கு புரியவில்லை. (Sorry, I didn't get that.)";
    const msgLower = userMsg.toLowerCase();

    // Intents (Tamil & English)
    if (msgLower.includes("மழை") || msgLower.includes("rain")) {
      reply = "இன்று மழை வாய்ப்பு உள்ளது 🌧️ (Rain is likely today 🌧️)";
    } else if (msgLower.includes("உரம்") || msgLower.includes("fertilizer")) {
      reply = "யூரியா அல்லது இயற்கை உரத்தை மாலை நேரத்தில் இடுங்கள் 🌱 (Apply Urea or organic fertilizer in the evening 🌱)";
    } else if (msgLower.includes("பூச்சி") || msgLower.includes("pest")) {
      reply = "வேப்ப எண்ணெய் தெளிக்கவும் 🐛 (Spray Neem oil to control pests 🐛)";
    } else if (msgLower.includes("வணக்கம்") || msgLower.includes("hello")) {
      reply = "வணக்கம்! இன்று விவசாயத்திற்கு என்ன உதவி தேவை? 😊 (Hello! How can I help with farming today? 😊)";
    }

    appendMessage("bot-msg", reply);
    speakTamil(reply);
  }, 1000);
}

function appendMessage(className, text) {
  const win = document.getElementById("chat-window");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${className} fade-enter`;
  msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
  win.appendChild(msgDiv);
  win.scrollTop = win.scrollHeight; // auto scroll
}

function speakTamil(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    // Remove english translations from speech string using regex if they are added in paren
    let speechText = text.replace(/ \([^)]*\)/g, '');
    utterance.text = speechText;
    utterance.lang = window.State.lang === 'ta' ? 'ta-IN' : 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}
