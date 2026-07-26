export const site = {
  name: "Tidco Networks",
  tagline: "The Most Affordable Network",
  description:
    "Tidco Networks delivers affordable, reliable internet to homes and businesses across North Eastern Kenya — Garissa, Wajir, Mandera and Marsabit — with fiber solutions for businesses in Nairobi.",
  phone: "0723 100 023",
  phoneIntl: "254723100023",
  email: "info@tidco.co.ke",
  paybill: "4137675",
  paybillLabel: "Lipa na M-Pesa Paybill",
};

export const whatsappLink = `https://wa.me/${site.phoneIntl}`;
export const telLink = `tel:+${site.phoneIntl}`;
export const emailLink = `mailto:${site.email}`;

export type Package = {
  name: string;
  speed: string;
  price: number;
  bestFor: string;
  popular?: boolean;
  features: string[];
};

export const packages: Package[] = [
  {
    name: "Starter",
    speed: "10 Mbps",
    price: 2000,
    bestFor: "Browsing, WhatsApp, streaming on one device",
    features: ["Unlimited data", "Free standard installation", "24/7 customer support"],
  },
  {
    name: "Popular",
    speed: "15 Mbps",
    price: 3000,
    bestFor: "A household with a few devices online at once",
    popular: true,
    features: [
      "Unlimited data",
      "Free standard installation",
      "24/7 customer support",
      "Great for HD streaming",
    ],
  },
  {
    name: "Power",
    speed: "20 Mbps",
    price: 4500,
    bestFor: "Heavy streaming, gaming, and video calls",
    features: [
      "Unlimited data",
      "Free standard installation",
      "24/7 customer support",
      "Best for multiple devices",
    ],
  },
];

export const coverageAreas = [
  { name: "Garissa", note: "Home base" },
  { name: "Wajir", note: "" },
  { name: "Mandera", note: "" },
  { name: "Marsabit", note: "" },
];

export const values = [
  {
    title: "Kenya-based",
    detail: "Built with vision, independence and stability.",
  },
  {
    title: "Continuously innovate",
    detail: "To meet changing user needs.",
  },
  {
    title: "Invest in our people",
    detail: "Skills and resources for our team.",
  },
  {
    title: "Professional rollout",
    detail: "Internet installation expertise you can trust.",
  },
  {
    title: "Customer partnerships",
    detail: "Listening, collaboration and transparency.",
  },
  {
    title: "Responsive help desk",
    detail: "A friendly Kenyan team, ready when you need us.",
  },
];

export const buySteps = [
  {
    title: "Choose your package",
    detail: "Pick the speed that fits your home or business needs.",
  },
  {
    title: "Reach out to us",
    detail: "Call or WhatsApp 0723 100 023 to confirm coverage at your location and book installation.",
  },
  {
    title: "We install",
    detail: "Our field technicians handle a professional, guided installation at your premises.",
  },
  {
    title: "Pay and connect",
    detail: "Pay via M-Pesa Paybill 4137675 using your account number to activate your connection.",
  },
];

export const billingNotes = [
  "Your monthly subscription runs for 30 days from the date of payment.",
  "You'll receive an email and SMS reminder before disconnection.",
  "Pay via M-Pesa for automatic reconnection — no need to call us.",
  "To upgrade or downgrade, simply pay for the package you wish to move to when renewing your subscription.",
];

export const refundNotes = [
  "Our technicians must first recover all installed equipment, undamaged, to qualify for a deposit refund.",
  "Refunds are made directly to the M-Pesa number registered under the account holder, within 48 hours of equipment recovery.",
];
