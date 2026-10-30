// =====================================================================
//  SEATTLE EVERGREEN CLEAN – QUOTE CALCULATOR SETTINGS
//  Change any number below and the calculator updates automatically.
//
//  Prices come from the Drive doc "Seattle Evergreen Clean Landing Page
//  with Prices" (Feb 5, 2026). Move-out + deep also match Square (Oct 30).
//  A price of null shows "Custom quote" instead of a number.
//  If you change a price in Square, change it here too.
// =====================================================================

window.QUOTE_SETTINGS = {
  PRICES_CONFIRMED: true,

  // How wide the shown range is (0 = show the exact price)
  RANGE: 0,

  // Real booking link (from seattleevergreenclean.com)
  BOOKING_URL: "https://book.squareup.com/appointments/0jfn9lbe2vpey4/location/CW0Y2705NWAX9/services",

  // Price and time per service, by unit size
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
      prices: { studio: 225, "1br": 275, "2br": 350, "3br": null }, // 3BR not on the price sheet
      hours: { studio: "3.5 hr", "1br": "4.5 hr", "2br": "6 hr", "3br": null },
      recurring: false
    },
    {
      id: "biweekly",
      name: "Bi-Weekly Apartment Cleaning",
      note: "Contract: 3-month minimum, starts with a deep clean.",
      prices: { studio: 135, "1br": 165, "2br": 210, "3br": null }, // 3BR not on the price sheet
      hours: { studio: "2 hr", "1br": "2.5 hr", "2br": "3.5 hr", "3br": null },
      recurring: true
    }
  ],

  // includedBaths = bathrooms covered by the base price (2BR is 1–2 bath, 3BR is 2 bath)
  units: [
    { id: "studio", name: "Studio", includedBaths: 1 },
    { id: "1br", name: "1 bedroom", includedBaths: 1 },
    { id: "2br", name: "2 bedrooms", includedBaths: 2 },
    { id: "3br", name: "3 bedrooms", includedBaths: 2 }
  ],

  // Bathrooms beyond what's included. null = confirmed at walkthrough
  extraBathroom: null,
  halfBathroom: null,

  // Add-ons (price sheet). price null = only shown where it's included.
  // startingAt: true shows "From" because the final price depends on time.
  // "includedIn" = free with that service (move-out includes appliances, cabinets, windows)
  addOns: [
    { id: "oven", name: "Inside oven", price: 50, includedIn: ["moveout"] },
    { id: "fridge", name: "Inside refrigerator", price: 50, includedIn: ["moveout"] },
    { id: "cabinets", name: "Inside cabinets & drawers", price: null, includedIn: ["moveout"] },
    { id: "windows", name: "Interior windows", price: null, includedIn: ["moveout"] },
    { id: "pethair", name: "Heavy pet hair removal", price: 75, startingAt: true, includedIn: [] },
    { id: "eco", name: "Eco / green cleaning products", price: 40, includedIn: [] }
  ]
};
