/**
 * Static content in English, Telugu (te), and Hindi (hi).
 * Used so card/content language matches the selected UI language.
 */

const DATA_BY_LANG = {
  en: {
    posts: [
      { id: 1, farmer: 'Green Valley Farms', location: 'Punjab, India', type: 'Video', title: 'How we use drip irrigation to save 40% water', description: 'A quick walkthrough of our drip setup, filters, and fertigation unit.', tags: ['#drip', '#waterSaving', '#sustainable'] },
      { id: 2, farmer: 'Sunrise Organics', location: 'Maharashtra, India', type: 'Photo', title: 'Before vs after using organic compost', description: 'Sharing results from 3 seasons of switching from chemicals to organic nutrition.', tags: ['#organic', '#soilHealth'] },
    ],
    guides: [
      { id: 1, title: 'Step-by-step: Sowing wheat with minimum tillage', level: 'Intermediate', duration: '12 min read' },
      { id: 2, title: 'How to start vegetable farming on 1 acre', level: 'Beginner', duration: '8 min read' },
    ],
    equipment: [
      { id: 1, name: 'Power tiller 12HP', mode: 'Rent', modeKey: 'Rent', price: '₹1,800 / day', location: 'Nashik', includesOperator: true },
      { id: 2, name: 'Tractor 45HP with rotavator', mode: 'Rent', modeKey: 'Rent', price: '₹2,300 / day', location: 'Ludhiana', includesOperator: false },
      { id: 3, name: 'Solar pump 5HP', mode: 'Sell', modeKey: 'Sell', price: '₹85,000', location: 'Ahmednagar', includesOperator: false },
    ],
    workers: [
      { id: 1, name: 'Ramesh Kumar', skills: ['Tractor driving', 'Sowing', 'Spraying'], experience: '5+ years', availability: 'Full-time', location: 'Indore' },
      { id: 2, name: 'Sita Devi', skills: ['Harvesting', 'Weeding', 'Sorting'], experience: '3+ years', availability: 'Seasonal', location: 'Jaipur' },
    ],
    jobs: [{ id: 1, title: 'Seasonal harvest workers needed for wheat', location: 'Karnal', type: 'Seasonal' }],
    products: [
      { id: 1, name: 'Organic Neem Cake', type: 'Organic', typeKey: 'Organic', crops: 'Vegetables, Pulses', benefits: 'Controls soil-borne pests, improves soil structure.', risk: 'Do not over-apply; can lock some nutrients temporarily.' },
      { id: 2, name: 'Urea 46% N', type: 'Chemical', typeKey: 'Chemical', crops: 'All field crops', benefits: 'Fast nitrogen source for rapid growth.', risk: 'Overuse can burn plants and harm soil biology.' },
    ],
    salesItems: [
      { id: 1, name: 'Organic Basmati Rice', farm: 'Himalayan Greens', price: '₹180 / kg', location: 'Dehradun', tags: ['Organic', 'Pesticide-free'] },
      { id: 2, name: 'Cold-pressed Mustard Oil', farm: 'Gangetic Farms', price: '₹320 / litre', location: 'Varanasi', tags: ['Cold-pressed', 'Direct-from-farm'] },
    ],
    courses: [
      { id: 1, title: 'Intro to Organic Farming', modules: 8, progress: 60, badge: 'Soil Health Starter' },
      { id: 2, title: 'Integrated Pest Management (IPM)', modules: 6, progress: 20, badge: 'Pest Scout' },
    ],
  },
  te: {
    posts: [
      { id: 1, farmer: 'గ్రీన్ వ్యాలీ ఫార్మ్స్', location: 'పంజాబ్, భారతదేశం', type: 'Video', title: '40% నీటిని ఎలా డ్రిప్ నీటిపాటుతో ఇంకించి ఉంచుకుంటాము', description: 'మా డ్రిప్ సెటప్, ఫిల్టర్లు మరియు ఫర్టిగేషన్ యూనిట్ యొక్క శీఘ్ర వాక్‌థ్రూ.', tags: ['#drip', '#waterSaving', '#sustainable'] },
      { id: 2, farmer: 'సన్రైజ్ ఆర్గానిక్స్', location: 'మహారాష్ట్ర, భారతదేశం', type: 'Photo', title: 'జైవిక కంపోస్ట్ ఉపయోగించే ముందు మరియు తర్వాత', description: 'రసాయనాల నుండి జైవిక పోషణకు మారడం యొక్క 3 సీజన్ల ఫలితాలను షేర్ చేస్తున్నాం.', tags: ['#organic', '#soilHealth'] },
    ],
    guides: [
      { id: 1, title: 'స్టెప్-బై-స్టెప్: కనిష్ట సాగుతో గోధుమ విత్తనం', level: 'ఇంటర్మీడియట్', duration: '12 నిమిషాల చదువు' },
      { id: 2, title: '1 ఎకరంలో కూరగాయల వ్యవసాయం ఎలా ప్రారంభించాలి', level: 'ప్రారంభ', duration: '8 నిమిషాల చదువు' },
    ],
    equipment: [
      { id: 1, name: 'పవర్ టిల్లర్ 12HP', mode: 'అద్దె', modeKey: 'Rent', price: '₹1,800 / రోజు', location: 'నాశిక్', includesOperator: true },
      { id: 2, name: 'రోటావేటర్‌తో ట్రాక్టర్ 45HP', mode: 'అద్దె', modeKey: 'Rent', price: '₹2,300 / రోజు', location: 'లుధియానా', includesOperator: false },
      { id: 3, name: 'సోలార్ పంప్ 5HP', mode: 'అమ్మకం', modeKey: 'Sell', price: '₹85,000', location: 'అహ్మద్నగర్', includesOperator: false },
    ],
    workers: [
      { id: 1, name: 'రమేష్ కుమార్', skills: ['ట్రాక్టర్ డ్రైవింగ్', 'విత్తనం', 'స్ప్రేయింగ్'], experience: '5+ సంవత్సరాలు', availability: 'పూర్తి సమయం', location: 'ఇండోర్' },
      { id: 2, name: 'సీతా దేవి', skills: ['విత్తనం కోత', 'కలుపు తొలగించడం', 'విభజన'], experience: '3+ సంవత్సరాలు', availability: 'సీజనల్', location: 'జైపూర్' },
    ],
    jobs: [{ id: 1, title: 'గోధుమ కోసం సీజనల్ హార్వెస్ట్ కార్మికులు కావాలి', location: 'కర్నాల్', type: 'సీజనల్' }],
    products: [
      { id: 1, name: 'జైవిక వేప కేక్', type: 'జైవిక', typeKey: 'Organic', crops: 'కూరగాయలు, పప్పు', benefits: 'మట్టి-జన్య కీటకాలను నియంత్రిస్తుంది, మట్టి నిర్మాణాన్ని మెరుగుపరుస్తుంది.', risk: 'అధికంగా వాడకండి; కొన్ని పోషకాలను తాత్కాలికంగా లాక్ చేయవచ్చు.' },
      { id: 2, name: 'యూరియా 46% N', type: 'రసాయన', typeKey: 'Chemical', crops: 'అన్ని ఫీల్డ్ పంటలు', benefits: 'త్వరిత వృద్ధికి వేగంగా నైట్రోజన్ మూలం.', risk: 'అధిక వాడకం మొక్కలను కాల్చవచ్చు మరియు మట్టి జీవశాస్త్రాన్ని హాని చేయవచ్చు.' },
    ],
    salesItems: [
      { id: 1, name: 'జైవిక బాస్మతి బియ్యం', farm: 'హిమాలయన్ గ్రీన్స్', price: '₹180 / kg', location: 'దేహ్రాదూన్', tags: ['జైవిక', 'పురుగుమందు-ఉచిత'] },
      { id: 2, name: 'కోల్డ్-ప్రెస్డ్ ఆవ నూనె', farm: 'గంగా ఫార్మ్స్', price: '₹320 / లీటరు', location: 'వారాణాసి', tags: ['కోల్డ్-ప్రెస్డ్', 'ఫార్మ్ నుండి ప్రత్యక్ష'] },
    ],
    courses: [
      { id: 1, title: 'జైవిక వ్యవసాయానికి పరిచయం', modules: 8, progress: 60, badge: 'మట్టి ఆరోగ్య ప్రారంభం' },
      { id: 2, title: 'ఇంటిగ్రేటెడ్ పెస్ట్ మేనేజ్మెంట్ (IPM)', modules: 6, progress: 20, badge: 'పెస్ట్ స్కౌట్' },
    ],
  },
  hi: {
    posts: [
      { id: 1, farmer: 'ग्रीन वैली फार्म्स', location: 'पंजाब, भारत', type: 'Video', title: 'हम 40% पानी बचाने के लिए ड्रिप सिंचाई कैसे इस्तेमाल करते हैं', description: 'हमारी ड्रिप सेटअप, फ़िल्टर और फर्टिगेशन यूनिट का एक संक्षिप्त वॉकथ्रू।', tags: ['#drip', '#waterSaving', '#sustainable'] },
      { id: 2, farmer: 'सनराइज ऑर्गैनिक्स', location: 'महाराष्ट्र, भारत', type: 'Photo', title: 'जैविक कम्पोस्ट इस्तेमाल करने से पहले और बाद में', description: 'रसायनों से जैविक पोषण में बदलाव के 3 सीज़न के नतीजे साझा कर रहे हैं।', tags: ['#organic', '#soilHealth'] },
    ],
    guides: [
      { id: 1, title: 'चरण-दर-चरण: न्यूनतम जुताई के साथ गेहूं बोना', level: 'मध्यवर्ती', duration: '12 मिनट पढ़ें' },
      { id: 2, title: '1 एकड़ में सब्जी की खेती कैसे शुरू करें', level: 'शुरुआती', duration: '8 मिनट पढ़ें' },
    ],
    equipment: [
      { id: 1, name: 'पावर टिलर 12HP', mode: 'किराया', modeKey: 'Rent', price: '₹1,800 / दिन', location: 'नासिक', includesOperator: true },
      { id: 2, name: 'रोटावेटर के साथ ट्रैक्टर 45HP', mode: 'किराया', modeKey: 'Rent', price: '₹2,300 / दिन', location: 'लुधियाना', includesOperator: false },
      { id: 3, name: 'सोलर पंप 5HP', mode: 'बिक्री', modeKey: 'Sell', price: '₹85,000', location: 'अहमदनगर', includesOperator: false },
    ],
    workers: [
      { id: 1, name: 'रमेश कुमार', skills: ['ट्रैक्टर चलाना', 'बुवाई', 'छिड़काव'], experience: '5+ वर्ष', availability: 'पूर्णकालिक', location: 'इंदौर' },
      { id: 2, name: 'सीता देवी', skills: ['कटाई', 'निराई', 'छंटाई'], experience: '3+ वर्ष', availability: 'सीज़नल', location: 'जयपुर' },
    ],
    jobs: [{ id: 1, title: 'गेहूं के लिए सीज़नल कटाई मजदूर चाहिए', location: 'करनाल', type: 'सीज़नल' }],
    products: [
      { id: 1, name: 'जैविक नीम केक', type: 'जैविक', typeKey: 'Organic', crops: 'सब्जियाँ, दालें', benefits: 'मिट्टी से पैदा होने वाले कीटों को नियंत्रित करता है, मिट्टी की संरचना सुधारता है।', risk: 'अधिक मात्रा में न डालें; कुछ पोषक तत्वों को अस्थायी रूप से लॉक कर सकता है।' },
      { id: 2, name: 'यूरिया 46% N', type: 'रासायनिक', typeKey: 'Chemical', crops: 'सभी खेत फसलें', benefits: 'तेज़ वृद्धि के लिए त्वरित नाइट्रोजन स्रोत।', risk: 'अधिक इस्तेमाल से पौधे जल सकते हैं और मिट्टी की जीवविज्ञान को नुकसान पहुंच सकता है।' },
    ],
    salesItems: [
      { id: 1, name: 'जैविक बासमती चावल', farm: 'हिमालयन ग्रीन्स', price: '₹180 / kg', location: 'देहरादून', tags: ['जैविक', 'कीटनाशक-मुक्त'] },
      { id: 2, name: 'कोल्ड-प्रेस्ड सरसों का तेल', farm: 'गंगेटिक फार्म्स', price: '₹320 / लीटर', location: 'वाराणसी', tags: ['कोल्ड-प्रेस्ड', 'फार्म से सीधा'] },
    ],
    courses: [
      { id: 1, title: 'जैविक खेती का परिचय', modules: 8, progress: 60, badge: 'मृदा स्वास्थ्य स्टार्टर' },
      { id: 2, title: 'समन्वित कीट प्रबंधन (IPM)', modules: 6, progress: 20, badge: 'कीट स्काउट' },
    ],
  },
};

export function getDataForLang(lang) {
  const code = lang && (lang.split('-')[0] === 'te' || lang.split('-')[0] === 'hi') ? lang.split('-')[0] : 'en';
  return DATA_BY_LANG[code] || DATA_BY_LANG.en;
}

export default DATA_BY_LANG;
