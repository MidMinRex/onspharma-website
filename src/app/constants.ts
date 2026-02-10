import ntp1 from './assets/ntp 1.jpg';
import ntp2 from './assets/ntp 2.jpg';
import ntp3 from './assets/ntp 3.jpg';
import onsiodase1 from './assets/onsiodase 1.jpg';
import onsiodase2 from './assets/onsiodase 2.jpg';
import onsiodase3 from './assets/onsiodase 3.jpg';
import klayons1 from './assets/klayons 1.jpg';
import klayons2 from './assets/klayons 2.jpg';
import klayons3 from './assets/klayons 3 .jpg';
import om2l1 from './assets/om2-l 1.jpg';
import om2l2 from './assets/om2-l 2.jpg';
import pinakin1 from './assets/pinakin-1.jpg';
import pinakin3 from './assets/pinakin-3.jpg';

export const COMPANY_INFO = {
  name: "ONS Pharma",
  location: "Agra, Uttar Pradesh, India",
  established: 2009,
  businessType: "Pharmaceutical Wholesale & Distribution",
  tagline: "Bridging the gap in healthcare through excellence in distribution.",
  contact: {
    address: "Neeraj Nagar 2 ,Agra, Uttar Pradesh, India",
    email: "info@onspharma.com",
    phone: "+91-9927094924",
  },
  disclaimer: "For registered medical practitioners and pharmacists only.",
};

export const SITE_URL = "https://onspharma.in";

export const PRODUCT_PATH_PREFIX = "/products";

export const getProductPath = (id: string) => `${PRODUCT_PATH_PREFIX}/${id}`;

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  uses: string[];
  composition: string[];
  image?: string;
  images?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "ntp-plus",
    name: "NTP-PLUS",
    category: "Analgesic",
    description:
      "NTP-PLUS is a tablet formulation containing Tramadol Hydrochloride and Acetaminophen, indicated for the management of moderate to severe pain. It acts centrally to reduce pain perception and is commonly used in trauma, severe arthritis, and post-operative pain.",
    uses: [
      "Moderate to severe pain",
      "Post-operative pain",
      "Trauma-related pain",
      "Severe arthritis",
    ],
    composition: [
      "Tablet formulation",
      "Contains Tramadol Hydrochloride",
      "Contains Acetaminophen",
      "Central analgesic action",
    ],
    image: ntp1,
    images: [
      ntp1,
      ntp2,
      ntp3,
    ],
  },

  {
    id: "om-2l",
    name: "OM-2L",
    category: "Nutritional Supplement",
    description:
      "OM-2L is a tablet formulation of antioxidants, vitamins, lycopene, and lutein designed to support overall health and nutritional balance. It helps reduce oxidative stress, supports muscle and nerve function, improves energy levels, and contributes to bone and cardiovascular health.",
    uses: [
      "General weakness",
      "Leg cramps",
      "Anemia",
      "Osteoporosis",
      "Nutritional deficiency",
    ],
    composition: [
      "Tablet formulation",
      "Antioxidants and vitamins",
      "Contains lycopene and lutein",
      "Supports cardiovascular and bone health",
    ],
    image: om2l1,
    images: [
      om2l1,
      om2l2,
    ],
  },

  {
    id: "onsioase",
    name: "ONSIOASE",
    category: "Anti-inflammatory",
    description:
      "ONSIOASE is a tablet formulation combining aceclofenac, paracetamol, and serratiopeptidase for effective pain relief and inflammation control. It helps reduce swelling, improves joint mobility, and enhances functional recovery.",
    uses: [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Low back pain",
      "Post-surgical inflammation",
      "Traumatic injuries",
    ],
    composition: [
      "Tablet formulation",
      "Aceclofenac",
      "Paracetamol",
      "Serratiopeptidase",
    ],
    image: onsiodase1,
    images: [
      onsiodase1,
      onsiodase2,
      onsiodase3,
    ],
  },

  {
    id: "pinakin",
    name: "PINAKIN",
    category: "Analgesic & Antipyretic",
    description:
      "PINAKIN is a tablet formulation containing nimesulide and paracetamol, providing rapid relief from pain, fever, and inflammation. It is commonly used in acute pain conditions with quick onset of action.",
    uses: [
      "Fever",
      "Dental pain",
      "Dysmenorrhea",
      "Low back pain",
      "Sports injuries",
    ],
    composition: [
      "Tablet formulation",
      "Nimesulide",
      "Paracetamol",
    ],
    image: pinakin1,
    images: [
      pinakin1,
      pinakin3,
    ],
  },

  {
    id: "klayons-dt",
    name: "KLAYONS-DT",
    category: "Analgesic",
    description:
      "Klayons-DT is a Ketorolac Tromethamine dispersible tablet indicated for the short-term management of moderate to severe pain in adults. It is commonly used in post-operative conditions and other acute pain scenarios to provide effective relief and help patients return to normal daily activities.",
    uses: [
      "Bone and joint pain",
      "Toothache",
      "Fever",
      "Pain during menstruation",
      "Spondylitis",
      "Muscle pain",
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Post-surgery pain",
      "Headache",
    ],
    composition: [
      "Dispersible Tablets",
      "Ketorolac Tromethamine 10 mg",
      "Fast-acting pain relief",
      "Effective reduction of inflammation, swelling, pain, and fever",
    ],
    image: klayons1,
    images: [
      klayons1,
      klayons2,
      klayons3,
    ],
  },
  {
    id: "onsiobal",
    name: "ONSIOBAL",
    category: "Neuropathy Management",
    description:
      "ONSIOBAL is an injectable formulation of methylcobalamin used in the management of neuropathic disorders. It promotes nerve regeneration, enhances myelination, and helps relieve burning sensations, numbness, and neuropathic pain.",
    uses: [
      "Diabetic neuropathy",
      "Peripheral neuropathy",
      "Drug-induced neuropathy",
      "Bell's palsy",
    ],
    composition: [
      "Injectable formulation",
      "Contains methylcobalamin",
      "Supports nerve regeneration",
      "Enhances myelination",
    ],
    image:
      "https://images.unsplash.com/photo-1580281657527-47bdbf4b47c3?auto=format&fit=crop&q=80&w=800",
  },

];
