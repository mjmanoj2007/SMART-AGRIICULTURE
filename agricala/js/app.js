// --- Constants & Dictionaries ---
const TRANSLATIONS = {
  en: {
    loading: "Loading...",
    auth_subtitle: "Smart farming companion",
    login: "Login",
    signup: "Sign Up",
    no_account: "Don't have an account?",
    has_account: "Already have an account?",
    greeting: "Hello, Farmer",
    dashboard: "Dashboard",
    offline_mode: "Offline Mode Active",
    detecting_location: "Detecting location...",
    weather_advice_loading: "Fetching intelligent advice...",
    alert_title: "Alert",
    alert_desc: "Fertilize rice tomorrow",
    task_title: "Today's Task",
    task_desc: "Inspect soil moisture",
    crop_calendar: "Smart Calendar",
    select_crop: "Select Crop:",
    crop_rice: "Rice (Paddy)",
    crop_wheat: "Wheat",
    crop_maize: "Maize",
    crop_sugarcane: "Sugarcane",
    ai_hub: "AI Assistant & Tools",
    tamil_bot: "Tamil Voice Bot",
    bot_greeting: "Hello! I am your farming assistant. How can I help you?",
    chat_placeholder: "Type or speak (Tamil)...",
    smart_tools: "Smart Tools",
    ai_recommend: "Crop Recommender",
    ai_disease: "Disease Detector",
    farmer_notes: "Farmer Notes",
    note_placeholder: "Write a note... (e.g., Bought seeds today)",
    save_note: "Save Note",
    nav_home: "Home",
    nav_calendar: "Calendar",
    nav_ai: "AI Hub",
    nav_notes: "Notes",
    nav_loans: "Loans",
    gov_loans_title: "Govt. Schemes & Loans",
    loan1_title: "PM Kisan Samman Nidhi",
    loan1_desc: "Income support of ₹6000 per year for farmer families.",
    loan2_title: "Kisan Credit Card (KCC)",
    loan2_desc: "Adequate and timely short-term credit for agricultural needs.",
    loan3_title: "PM Fasal Bima Yojana",
    loan3_desc: "Crop insurance scheme against natural calamities and pest attacks.",
    loan4_title: "PM KUSUM Scheme",
    loan4_desc: "Subsidies for installing solar pumps and grid-connected solar power plants.",
    loan5_title: "Agri Infrastructure Fund",
    loan5_desc: "Debt financing facility for post-harvest management infrastructure.",
    loan6_title: "NABARD Dairy Subsidy",
    loan6_desc: "Financial assistance and subsidy for setting up modern dairy farms.",
    loan7_title: "Mudra Loan for Allied Agri",
    loan7_desc: "Loans up to ₹10 lakh for activities like poultry, beekeeping, and fisheries.",
    apply_now: "Know More",
    nav_shop: "Shop",
    shop_title: "Fertilizer Store",
    item1_name: "Urea 46% Nitrogen",
    item1_price: "₹266 / 45kg bag",
    item2_name: "NPK 20:20:0:13",
    item2_price: "₹1200 / 50kg bag",
    item3_name: "Organic Neem Cake",
    item3_price: "₹450 / 25kg bag",
    order_now: "Order Now"
  },
  ta: {
    loading: "ஏற்றுகிறது...",
    auth_subtitle: "ஸ்மார்ட் விவசாய வழிகாட்டி",
    login: "உள்நுழை",
    signup: "பதிவு செய்",
    no_account: "கணக்கு இல்லையா?",
    has_account: "ஏற்கனவே கணக்கு உள்ளதா?",
    greeting: "வணக்கம், உழவரே",
    dashboard: "முகப்பு",
    offline_mode: "ஆஃப்லைன் பயன்முறை",
    detecting_location: "இருப்பிடத்தை அறிகிறது...",
    weather_advice_loading: "புத்திசாலி ஆலோசனை பெறப்படுகிறது...",
    alert_title: "ரெட் அலர்ட்",
    alert_desc: "நாளை நெல்லுக்கு உரம் போடவும்",
    task_title: "இன்றைய வேலை",
    task_desc: "மண் ஈரப்பதத்தை சரிபார்க்கவும்",
    crop_calendar: "பயிர் காலண்டர்",
    select_crop: "பயிரை தேர்ந்தெடுக்கவும்:",
    crop_rice: "நெல்",
    crop_wheat: "கோதுமை",
    crop_maize: "மக்காச்சோளம்",
    crop_sugarcane: "கரும்பு",
    ai_hub: "செயற்கை நுண்ணறிவு",
    tamil_bot: "தமிழ் குரல் உதவி",
    bot_greeting: "வணக்கம்! நான் உங்கள் விவசாய உதவியாளர். நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    chat_placeholder: "தமிழில் தட்டச்சு செய்யவும்/பேசவும்...",
    smart_tools: "ஸ்மார்ட் கருவிகள்",
    ai_recommend: "பயிர் பரிந்துரை",
    ai_disease: "நோய் கண்டறிதல்",
    farmer_notes: "விவசாயி குறிப்புகள்",
    note_placeholder: "குறிப்பை எழுதவும்...",
    save_note: "சேமி",
    nav_home: "முகப்பு",
    nav_calendar: "காலண்டர்",
    nav_ai: "AI கருவி",
    nav_notes: "குறிப்புகள்",
    nav_loans: "கடன்கள்",
    gov_loans_title: "அரசு திட்டங்கள் & கடன்கள்",
    loan1_title: "பிஎம் கிசான் திட்டம்",
    loan1_desc: "விவசாயிகளுக்கு ஆண்டுதோறும் ₹6000 வருமான ஆதரவு.",
    loan2_title: "கிசான் கிரெடிட் கார்டு (KCC)",
    loan2_desc: "விவசாயத் தேவைகளுக்கு குறுகிய கால கடன்.",
    loan3_title: "பிஎம் பயிர் காப்பீட்டு திட்டம்",
    loan3_desc: "இயற்கை பேரிடர்கள் மற்றும் பூச்சி தாக்குதல்களுக்கு எதிரான பயிர் காப்பீடு.",
    loan4_title: "பிஎம் குசும் (KUSUM) திட்டம்",
    loan4_desc: "சூரிய ஒளி பம்புகள் மற்றும் மின் நிலையங்கள் அமைக்க மானியம்.",
    loan5_title: "வேளாண் உள்கட்டமைப்பு நிதி (AIF)",
    loan5_desc: "அறுவடைக்கு பிந்தைய மேலாண்மை உள்கட்டமைப்புகளுக்கான கடன் வசதி.",
    loan6_title: "நபார்டு பால் பண்ணை மானியம் (DEDS)",
    loan6_desc: "நவீன பால் பண்ணைகள் அமைப்பதற்கான நிதி உதவி மற்றும் மானியம்.",
    loan7_title: "முத்ரா கடன் (வேளாண் சார்ந்த தொழில்)",
    loan7_desc: "கோழி வளர்ப்பு, தேனீ வளர்ப்பு மற்றும் மீன்வளர்ப்புக்கு ₹10 லட்சம் வரை கடன்.",
    apply_now: "மேலும் அறிய",
    nav_shop: "கடை",
    shop_title: "உரம் கடை",
    item1_name: "யூரியா 46% தழைச்சத்து",
    item1_price: "₹266 / 45கிலோ பை",
    item2_name: "NPK 20:20:0:13",
    item2_price: "₹1200 / 50கிலோ பை",
    item3_name: "வேப்பம் புண்ணாக்கு",
    item3_price: "₹450 / 25கிலோ பை",
    order_now: "ஆர்டர் செய்"
  }
};

// --- Utilities ---
function showToast(msg, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showLoading(show) {
  const spinner = document.getElementById('loading-spinner');
  if (show) spinner.classList.remove('hidden');
  else spinner.classList.add('hidden');
}

function updateDate() {
  const d = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  document.getElementById('current-date').innerText = d.toLocaleDateString(window.State.lang === 'ta' ? 'ta-IN' : 'en-US', options);
}

// --- Multi-language Support ---
function toggleLanguage() {
  window.State.lang = window.State.lang === 'en' ? 'ta' : 'en';
  document.querySelector('.lang-label').innerText = window.State.lang.toUpperCase();
  applyTranslations();
  updateDate();
}

function applyTranslations() {
  const dict = TRANSLATIONS[window.State.lang];
  
  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });
  
  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
}

// --- Navigation ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => {
    t.classList.remove('active');
    t.classList.add('hidden');
  });
  const target = document.getElementById(tabId);
  target.classList.remove('hidden');
  // trigger animation
  setTimeout(() => target.classList.add('active'), 10);
  
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`[data-target="${tabId}"]`).classList.add('active');
  window.State.currentTab = tabId;
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  updateDate();
  applyTranslations();
  
  // Event listeners
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  
  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(nav.getAttribute('data-target'));
    });
  });
  
  // Offline monitoring
  window.addEventListener('online', () => {
    window.State.offline = false;
    document.getElementById('offline-warning').classList.add('hidden');
    showToast("Back online!", "success");
  });
  window.addEventListener('offline', () => {
    window.State.offline = true;
    document.getElementById('offline-warning').classList.remove('hidden');
    showToast("You are offline. Showing cached data.", "warning");
  });
});

// Modals
function openToolModal(toolType) {
  const overlay = document.getElementById('modal-overlay');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  
  overlay.classList.remove('hidden');
  
  if(toolType === 'recommendation') {
    title.innerText = window.State.lang === 'ta' ? "பயிர் முடிவுகள்" : "Crop Recommendation";
    body.innerHTML = `
      <div style="text-align:center;">
        <i class="fa-solid fa-seedling text-primary" style="font-size:3rem; margin-bottom:1rem;"></i>
        <p>Analyzing soil & season...</p>
        <h4 style="margin-top:10px; color:var(--primary);">Recommended: Rice Wrapper</h4>
        <p style="font-size:0.9rem; color:#666; margin-top:5px;">Based on your region's high humidity.</p>
      </div>
    `;
  } else if (toolType === 'disease') {
    title.innerText = window.State.lang === 'ta' ? "நோய் கண்டறிதல்" : "Disease Detection";
    body.innerHTML = `
      <div style="text-align:center;">
        <i class="fa-solid fa-camera text-warning" style="font-size:3rem; margin-bottom:1rem;"></i>
        <p>Upload a photo of the affected leaf...</p>
        <button class="btn btn-primary mt-1" onclick="mockDiseaseDetection()" style="width:100%;"><i class="fa-solid fa-upload"></i> Upload</button>
        <div id="disease-result" class="mt-1"></div>
      </div>
    `;
  }
}

document.getElementById('close-modal-btn').addEventListener('click', () => {
  document.getElementById('modal-overlay').classList.add('hidden');
});

function mockDiseaseDetection() {
  const res = document.getElementById('disease-result');
  res.innerHTML = `<span style="color:var(--danger); font-weight:bold;">Leaf Spot Detected!</span><br><small>Apply neem oil or appropriate fungicide.</small>`;
}
