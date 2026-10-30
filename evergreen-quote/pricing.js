// =====================================================================
//  SEATTLE EVERGREEN CLEAN – QUOTE CALCULATOR SETTINGS
//  Change any number below and the calculator updates automatically.
//
//  Prices match the Square booking page (checked Oct 30, 2026).
//  A price of null shows "Custom quote" instead of a number.
//  If you change a price in Square, change it here too.
// =====================================================================

window.QUOTE_SETTINGS = {
  PRICES_CONFIRMED: true,

  // How wide the shown range is (0 = show the exact price)
  RANGE: 0,

  // Real booking link (from seattleevergreenclean.com)
  BOOKING_URL: "https://book.squareup.com/appointments/0jfn9lbe2vpey4/location/CW0Y2705NWAX9/services",

  // Price and time per service, by unit size (from Square)
  services: [
    {
      id: "moveout",
      name: "Move-In / Move-Out Cleaning",
      note: "Empty units only. Vacant apartment, utilities on.",
      prices: { studio: 275, "1br": 325, "2br": 425, "3br": 525 },
      hours: { studio: "4 hr", "1br": "5 hr", "2br": "6.5 hr", "3br": "8 hr" },
      recurring: false
    },
    {
      id: "deep",
      name: "Deep Apartment Cleaning",
      note: "Top-to-bottom reset for occupied apartments.",
      prices: { studio: 225, "1br": 275, "2br": 350, "3br": null }, // 3BR not offered in Square yet
      hours: { studio: "3.5 hr", "1br": "4.5 hr", "2br": "6 hr", "3br": null },
      recurring: false
    },
    {
      id: "biweekly",
      name: "Bi-Weekly Apartment Cleaning",
      note: "Every two weeks. Limited contracts available.",
      prices: { studio: null, "1br": null, "2br": null, "3br": null }, // not priced yet
      hours: {},
      recurring: true
    }
  ],

  // includedBaths = bathrooms covered by the base price (Square: 2BR is 1–2 bath, 3BR is 2 bath)
  units: [
    { id: "studio", name: "Studio", includedBaths: 1 },
    { id: "1br", name: "1 bedroom", includedBaths: 1 },
    { id: "2br", name: "2 bedrooms", includedBaths: 2 },
    { id: "3br", name: "3 bedrooms", includedBaths: 2 }
  ],

  // Bathrooms beyond what's included. null = confirmed at walkthrough
  extraBathroom: null,
  halfBathroom: null,

  // Add-ons. price null = hidden until you set a price.
  // "includedIn" = free with that service (Square says move-out includes windows + appliances)
  addOns: [
    { id: "fridge", name: "Inside fridge", price: null, includedIn: ["moveout"] },
    { id: "oven", name: "Inside oven", price: null, includedIn: ["moveout"] },
    { id: "cabinets", name: "Inside cabinets & drawers", price: null, includedIn: [] },
    { id: "windows", name: "Interior windows", price: null, includedIn: ["moveout"] },
    { id: "balcony", name: "Balcony or patio", price: null, includedIn: [] },
    { id: "pethair", name: "Heavy pet hair", price: null, includedIn: [] }
  ]
};
