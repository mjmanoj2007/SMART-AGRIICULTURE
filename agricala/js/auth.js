// Handle Auth logic

let isSignUpMode = false;

// Mock user state
const dummyUser = { email: "farmer@agricalendar.com", displayName: "Arivu" };

document.addEventListener("DOMContentLoaded", () => {
  const authScreen = document.getElementById("auth-screen");
  const appScreen = document.getElementById("app-screen");
  
  // Try to initialize Firebase Auth, fallback to mock if API key is placeholder
  let hasRealFirebase = false;
  try {
    if(CONFIG.FIREBASE.apiKey !== "YOUR_FIREBASE_API_KEY") {
      firebase.initializeApp(CONFIG.FIREBASE);
      hasRealFirebase = true;
    }
  } catch(e) {
    console.error("Firebase init failed:", e);
  }

  function showApp(user) {
    window.State.user = user;
    authScreen.classList.remove('active');
    setTimeout(() => {
      authScreen.classList.add('hidden');
      appScreen.classList.remove('hidden');
    }, 300); // Wait for transition
    
    document.getElementById('user-greeting').innerText = 
      (window.State.lang === 'en' ? "Hello, " : "வணக்கம், ") + (user.displayName || user.email.split('@')[0]);
      
    // Initialize other modules
    if(window.initWeather) window.initWeather();
    if(window.initCalendar) window.initCalendar();
    if(window.initNotes) window.initNotes(window.State.user.email);
    if(window.initShop) window.initShop();
  }

  // Auto-login mockup
  const savedUser = localStorage.getItem('agri_user');
  if (savedUser) {
    showApp(JSON.parse(savedUser));
  }

  document.getElementById("toggle-auth-mode").addEventListener("click", (e) => {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;
    const btnText = document.querySelector("#auth-btn span");
    const toggleEl = document.getElementById("toggle-auth-mode");
    const switchTxt = document.querySelector(".auth-switch span");
    
    if (isSignUpMode) {
      btnText.setAttribute('data-i18n', 'signup');
      switchTxt.setAttribute('data-i18n', 'has_account');
      toggleEl.setAttribute('data-i18n', 'login');
    } else {
      btnText.setAttribute('data-i18n', 'login');
      switchTxt.setAttribute('data-i18n', 'no_account');
      toggleEl.setAttribute('data-i18n', 'signup');
    }
    applyTranslations();
  });

  document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();
    showLoading(true);
    const email = document.getElementById("auth-email").value;
    const pwd = document.getElementById("auth-password").value;
    
    if (hasRealFirebase) {
      // Real firebase
      if(isSignUpMode) {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
          .then(cred => {
            showLoading(false);
            showApp(cred.user);
          }).catch(err => { showLoading(false); showToast(err.message, "error"); });
      } else {
        firebase.auth().signInWithEmailAndPassword(email, pwd)
          .then(cred => {
            showLoading(false);
            showApp(cred.user);
          }).catch(err => { showLoading(false); showToast(err.message, "error"); });
      }
    } else {
      // Mock login implementation
      setTimeout(() => {
        showLoading(false);
        const userObj = { email: email, displayName: email.split('@')[0] };
        localStorage.setItem('agri_user', JSON.stringify(userObj));
        showToast(isSignUpMode ? "Registered successfully" : "Logged in successfully", "success");
        showApp(userObj);
      }, 1000);
    }
  });

  document.getElementById("logout-btn").addEventListener("click", () => {
    if(hasRealFirebase) {
       firebase.auth().signOut().then(() => {
         localStorage.removeItem('agri_user');
         window.location.reload();
       });
    } else {
       localStorage.removeItem('agri_user');
       window.location.reload();
    }
  });
});
