// Mock AI logic for recommendations & disease detection
// This acts as a frontend mockup for what would normally connect to a Python/Tensorflow backend.

window.AiHub = {
  // Recommend Crop mock based on inputs
  recommendCrop(soilType, season) {
    const hash = soilType.toLowerCase() + season.toLowerCase();
    if(hash.includes("clay") && hash.includes("monsoon")) return "Paddy (Rice)";
    if(hash.includes("loamy") && hash.includes("winter")) return "Wheat";
    return "Maize or Pulses";
  },
  
  // Disease detection mock
  detectDisease(imageUrl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          disease: "Yellow Leaf Spot",
          remedy: "Apply 2% Neem oil solution in early morning."
        });
      }, 1500); // simulate network delay
    });
  }
};
