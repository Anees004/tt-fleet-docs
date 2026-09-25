---
id: "rules"
group: "reference"
title: "Operator rules"
blurb: "Short do / don't checklist"
badge: "Ref"
badgeClass: "ref"
goal: "Keep ops consistent: Accept before Assign, check Live Map, keep master data honest, Reject only when needed."
image: null
icon: "rules"
steps:
  - "Accept (when required) before Assign."
  - "Check Live Map for online drivers near the pickup."
  - "Keep Drivers, Vehicles, and Greeters Active statuses truthful."
  - "Reject only when the fleet will not take the trip."
points:
  - id: "order-of-ops"
    title: "Order of operations"
    tease: "List → Detail → Accept → Assign"
    body: "Standard path: Bookings list → Ride Details → Accept → Assign driver/vehicle/greeter. Live Map is a side check, not a substitute for Assign. Full steps live in Accept & Assign and Live Map."
    icon: "check"
    related:
      - "accept-assign"
      - "live-map"
      - "bookings-list"
  - id: "data-hygiene"
    title: "Data hygiene"
    tease: "Bad master data breaks assign"
    body: "Inactive cars left Active, missing greeters, and stale driver phones show up as assign failures. Fix Drivers, Vehicles, and Greeters in setup — not mid-Accept on a live booking."
    icon: "drivers"
    related:
      - "drivers"
      - "vehicles"
      - "greeters"
---
