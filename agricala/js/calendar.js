// Dynamic Crop Calendar

const CROP_CALENDAR = {
  rice: [
    { month: "Jan", "en": "Nursery preparation & sowing", "ta": "நாற்றங்கால் தயாரிப்பு & விதைப்பு" },
    { month: "Feb", "en": "Transplanting & apply basal fertilizer", "ta": "நடவு & அடி உரம் இடுதல்" },
    { month: "Mar", "en": "Weeding & Top dressing", "ta": "களை எடுத்தல் & மேலுரம் இடுதல்" },
    { month: "Apr", "en": "Pest observation (Stem borer)", "ta": "பூச்சி தண்டு துளைப்பான் கவனிப்பு" },
    { month: "May", "en": "Harvesting preparation", "ta": "அறுவடை প্রস্তুতি" }
  ],
  wheat: [
    { month: "Nov", "en": "Sowing winter wheat", "ta": "கோதுமை விதைப்பு" },
    { month: "Dec", "en": "First irrigation at crown root", "ta": "முதல் நீர்ப்பாசனம்" },
    { month: "Jan", "en": "Second irrigation & Top dressing", "ta": "இரண்டாவது நீர்ப்பாசனம் & உரம்" },
    { month: "Feb", "en": "Disease management (Rust)", "ta": "நோய் நிர்வாகம்" },
    { month: "Mar", "en": "Grain filling stage watering", "ta": "தானியம் நிரம்பும் கட்டம்" }
  ],
  maize: [
    { month: "Jun", "en": "Sowing with onset of monsoon", "ta": "பருவமழை ஆரம்பத்தில் விதைப்பு" },
    { month: "Jul", "en": "Weeding & Earthing up", "ta": "களை எடுத்தல் & மண் அணைத்தல்" },
    { month: "Aug", "en": "Flowering stage irrigation", "ta": "பூக்கும் பருவத்தில் நீர்" },
    { month: "Sep", "en": "Cob development checks", "ta": "கதிர் வளர்ச்சி கவனிப்பு" }
  ],
  sugarcane: [
    { month: "Jan", "en": "Planting setts", "ta": "கரும்பு கரணை நடுதல்" },
    { month: "Feb", "en": "Early shoot borer check", "ta": "ஆரம்ப தண்டு துளைப்பான் சோதனை" },
    { month: "Mar", "en": "Earthing up & trash mulching", "ta": "மண் அணைத்தல் & மூடாக்கு" },
    { month: "Jul", "en": "Propping & De-trashing", "ta": "பக்கவாட்டுகளை எடுத்தல்" },
    { month: "Dec", "en": "Harvesting mature canes", "ta": "முதிர்ந்த கரும்பை அறுவடை செய்தல்" }
  ]
};

window.initCalendar = function() {
  const selector = document.getElementById("crop-selector");
  selector.addEventListener("change", (e) => {
    renderCalendar(e.target.value);
  });
  
  // Initial render
  renderCalendar("rice");
};

function renderCalendar(cropKey) {
  const container = document.getElementById("calendar-tasks-container");
  container.innerHTML = "";
  
  const tasks = CROP_CALENDAR[cropKey];
  if(!tasks) return;
  
  tasks.forEach((task, index) => {
     const item = document.createElement("div");
     item.className = "task-item fade-enter";
     item.style.animationDelay = `${index * 0.1}s`;
     
     const lang = window.State.lang || 'en';
     const text = task[lang];
     
     item.innerHTML = `
        <div class="task-month">${task.month}</div>
        <div class="task-detail">${text}</div>
     `;
     container.appendChild(item);
  });
}
