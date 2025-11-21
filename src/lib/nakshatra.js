export const nakshatraHindiMap = {
    "Ashwini": "अश्विनी",
    "Bharani": "भरणी",
    "Krittika": "कृत्तिका",
    "Rohini": "रोहिणी",
    "Mrigashira": "मृगशीर्षा",
    "Ardra": "आर्द्रा",
    "Punarvasu": "पुनर्वसु",
    "Pushya": "पुष्य",
    "Ashlesha": "आश्लेषा",
    "Magha": "मघा",
    "Purva_Phalguni": "पूर्व फाल्गुनी",
    "Uttara_Phalguni": "उत्तर फाल्गुनी",
    "Hasta": "हस्त",
    "Chitra": "चित्रा",
    "Swati": "स्वाती",
    "Vishakha": "विशाखा",
    "Anuradha": "अनुराधा",
    "Jyeshtha": "ज्येष्ठा",
    "Mula": "मूल",
    "Purva_Ashadha": "पूर्वाषाढ़ा",
    "Uttara_Ashadha": "उत्तराषाढ़ा",
    "Shravana": "श्रवण",
    "Dhanishta": "धनिष्ठा",
    "Shatabhisha": "शतभिषा",
    "Purva_Bhadrapada": "पूर्व भाद्रपद",
    "Uttara_Bhadrapada": "उत्तर भाद्रपद",
    "Revati": "रेवती"
};


export function getHindiNakshatra(englishName) {
    return nakshatraHindiMap[englishName] || englishName || "";
}
