// =====================================================================
//  SEATTLE EVERGREEN CLEAN – QUOTE CALCULATOR SETTINGS
//  Change any number below and the calculator updates automatically.
//
//  ⚠️ ALL PRICES BELOW ARE SAMPLES. Replace them with your real prices,
//  then set PRICES_CONFIRMED to true. Until then the page shows a
//  "Sample prices" notice so visitors aren't quoted numbers you
//  haven't approved.
// =====================================================================

window.QUOTE_SETTINGS = {
  PRICES_CONFIRMED: false,

  // How wide the shown range is (0.10 = shows 10% below to 10% above)
  RANGE: 0.1,

  // Real booking link (from seattleevergreenclean.com)
  BOOKING_URL: "https://book.squareup.com/appointments/0jfn9lbe2vpey4/location/CW0Y2705NWAX9/services",

  // Base price per service, by unit size. SAMPLE – set real prices
  services: [
    {
      id: "moveout",
      name: "Move-In / Move-Out Cleaning",
      note: "Empty units only. Vacant apartment, utilities on.",
      prices: { studio: 260, "1br": 300, "2br": 380, "3br": 460 }, // SAMPLE
      recurring: false
    },
    {
      id: "deep",
      name: "Deep Apartment Cleaning",
      note: "Top-to-bottom reset for occupied apartments.",
      prices: { studio: 220, "1br": 260, "2br": 330, "3br": 400 }, // SAMPLE
      recurring: false
    },
    {
      id: "biweekly",
      name: "Bi-Weekly Apartment Cleaning",
      note: "Every two weeks. Limited contracts available.",
      prices: { studio: 120, "1br": 140, "2br": 170, "3br": 200 }, // SAMPLE (per visit)
      recurring: true
    }
  ],

  units: [
    { id: "studio", name: "Studio" },
    { id: "1br", name: "1 bedroom" },
    { id: "2br", name: "2 bedrooms" },
    { id: "3br", name: "3 bedrooms" }
  ],

  // Added for each bathroom beyond the first. SAMPLE
  extraBathroom: 35,      // SAMPLE
  halfBathroom: 20,       // SAMPLE

  // Add-ons. SAMPLE prices. "includedIn" = free with that service
  addOns: [
    { id: "fridge", name: "Inside fridge", price: 35, includedIn: ["moveout"] },     // SAMPLE
    { id: "oven", name: "Inside oven", price: 35, includedIn: ["moveout"] },         // SAMPLE
    { id: "cabinets", name: "Inside cabinets & drawers", price: 40, includedIn: ["moveout"] }, // SAMPLE
    { id: "windows", name: "Interior windows", price: 40, includedIn: ["moveout"] }, // SAMPLE
    { id: "balcony", name: "Balcony or patio", price: 25, includedIn: [] },          // SAMPLE
    { id: "pethair", name: "Heavy pet hair", price: 30, includedIn: [] }             // SAMPLE
  ]
};
