const SHOP_ITEMS = [
  {
    icon: "fa-sack-dollar", color: "text-accent",
    en_name: "Urea 46% Nitrogen", ta_name: "யூரியா 46% தழைச்சத்து",
    en_price: "₹266 / 45kg bag", ta_price: "₹266 / 45கிலோ பை"
  },
  {
    icon: "fa-flask", color: "text-primary",
    en_name: "NPK 20:20:0:13", ta_name: "NPK 20:20:0:13",
    en_price: "₹1200 / 50kg bag", ta_price: "₹1200 / 50கிலோ பை"
  },
  {
    icon: "fa-spray-can", color: "text-warning",
    en_name: "Organic Neem Cake", ta_name: "வேப்பம் புண்ணாக்கு",
    en_price: "₹450 / 25kg bag", ta_price: "₹450 / 25கிலோ பை"
  },
  {
    icon: "fa-seedling", color: "text-primary",
    en_name: "DAP (Diammonium Phosphate)", ta_name: "டி.ஏ.பி (DAP)",
    en_price: "₹1350 / 50kg bag", ta_price: "₹1350 / 50கிலோ பை"
  },
  {
    icon: "fa-leaf", color: "text-accent",
    en_name: "MOP (Muriate of Potash)", ta_name: "எம்.ஓ.பி (MOP)",
    en_price: "₹1700 / 50kg bag", ta_price: "₹1700 / 50கிலோ பை"
  },
  {
    icon: "fa-flask", color: "text-info",
    en_name: "SSP (Single Super Phosphate)", ta_name: "எஸ்.எஸ்.பி (SSP)",
    en_price: "₹400 / 50kg bag", ta_price: "₹400 / 50கிலோ பை"
  },
  {
    icon: "fa-cubes", color: "text-warning",
    en_name: "Zinc Sulphate", ta_name: "துத்தநாக சல்பேட்",
    en_price: "₹800 / 25kg pack", ta_price: "₹800 / 25கிலோ சிப்பம்"
  },
  {
    icon: "fa-worm", color: "text-primary",
    en_name: "Vermicompost", ta_name: "மண்புழு உரம்",
    en_price: "₹300 / 50kg bag", ta_price: "₹300 / 50கிலோ பை"
  },
  {
    icon: "fa-flask", color: "text-danger",
    en_name: "Boron 20%", ta_name: "போரான் 20%",
    en_price: "₹150 / 1kg pack", ta_price: "₹150 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-vial-virus", color: "text-primary",
    en_name: "Rhizobium Bio-fertilizer", ta_name: "ரைசோபியம் உயிர் உரம்",
    en_price: "₹80 / 1kg pack", ta_price: "₹80 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-droplet", color: "text-info",
    en_name: "NPK 19:19:19 (Water Soluble)", ta_name: "NPK 19:19:19",
    en_price: "₹200 / 1kg pack", ta_price: "₹200 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-snowflake", color: "text-warning",
    en_name: "Epsom Salt (Magnesium)", ta_name: "எப்சம் உப்பு",
    en_price: "₹40 / 1kg pack", ta_price: "₹40 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-cubes", color: "text-primary",
    en_name: "Calcium Nitrate", ta_name: "கால்சியம் நைட்ரேட்",
    en_price: "₹1200 / 25kg bag", ta_price: "₹1200 / 25கிலோ பை"
  },
  {
    icon: "fa-bottle-droplet", color: "text-info",
    en_name: "Seaweed Extract Liquid", ta_name: "கடற்பாசி உரம்",
    en_price: "₹350 / 1L bottle", ta_price: "₹350 / 1லிட்டர் பாட்டில்"
  },
  {
    icon: "fa-mound", color: "text-danger",
    en_name: "Humic Acid Granules", ta_name: "ஹியூமிக் அமிலம்",
    en_price: "₹450 / 5kg bucket", ta_price: "₹450 / 5கிலோ வாளி"
  },
  {
    icon: "fa-shield", color: "text-primary",
    en_name: "Trichoderma Viride", ta_name: "ட்ரைக்கோடெர்மா விரிடி",
    en_price: "₹150 / 1kg pack", ta_price: "₹150 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-shield-halved", color: "text-info",
    en_name: "Pseudomonas Fluorescens", ta_name: "சூடோமோனாஸ் புளோரசன்ஸ்",
    en_price: "₹150 / 1kg pack", ta_price: "₹150 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-sun", color: "text-warning",
    en_name: "Sulphur 90% WDG", ta_name: "கந்தகம் 90%",
    en_price: "₹120 / 1kg pack", ta_price: "₹120 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-flask", color: "text-primary",
    en_name: "NPK 10:26:26", ta_name: "NPK 10:26:26",
    en_price: "₹1470 / 50kg bag", ta_price: "₹1470 / 50கிலோ பை"
  },
  {
    icon: "fa-bacterium", color: "text-accent",
    en_name: "PSB Bio-fertilizer", ta_name: "பாஸ்போபாக்டீரியா",
    en_price: "₹100 / 1kg pack", ta_price: "₹100 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-vial", color: "text-primary",
    en_name: "Azotobacter Bio-fertilizer", ta_name: "அசோட்டோபாக்டர்",
    en_price: "₹100 / 1kg pack", ta_price: "₹100 / 1கிலோ சிப்பம்"
  },
  {
    icon: "fa-tractor", color: "text-warning",
    en_name: "FYM (Farm Yard Manure)", ta_name: "தொழு உரம்",
    en_price: "₹4000 / Tractor load", ta_price: "₹4000 / டிராக்டர் லோடு"
  },
  {
    icon: "fa-boxes-packing", color: "text-info",
    en_name: "Micronutrient Mixture", ta_name: "நுண்ணூட்ட கலவை (நெல்)",
    en_price: "₹250 / 5kg pack", ta_price: "₹250 / 5கிலோ சிப்பம்"
  }
];

window.initShop = function() {
  renderShop();
};

function renderShop() {
  const container = document.getElementById("shop-items-container");
  if (!container) return;
  container.innerHTML = "";
  
  const lang = window.State.lang || 'en';
  
  SHOP_ITEMS.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "card loan-card fade-enter";
    card.style.animationDelay = `${(idx % 5) * 0.1}s`;
    
    // Translation logic local for items
    const name = lang === 'ta' ? item.ta_name : item.en_name;
    const price = lang === 'ta' ? item.ta_price : item.en_price;
    const orderBtnText = lang === 'ta' ? "ஆர்டர் செய்" : "Order Now";
    const orderSuccess = lang === 'ta' ? "ஆர்டர் வெற்றிகரமாக பதிவு செய்யப்பட்டது!" : "Order Placed Successfully!";
    
    card.innerHTML = `
      <div class="loan-header">
        <i class="fa-solid ${item.icon} ${item.color} text-xl"></i>
        <h4>${name}</h4>
      </div>
      <p class="loan-desc text-muted mt-1">${price}</p>
      <button class="btn btn-primary mt-1 full-width" onclick="showToast('${orderSuccess}', 'success')">
        <i class="fa-solid fa-cart-shopping"></i> <span>${orderBtnText}</span>
      </button>
    `;
    
    container.appendChild(card);
  });
}

// Re-render the shop when the language is toggled so the local translations apply
const originalToggleLanguageShop = window.toggleLanguage;
window.toggleLanguage = function() {
  if (originalToggleLanguageShop) originalToggleLanguageShop();
  renderShop(); // Refresh shop list directly since they avoid data-i18n for scale
};
