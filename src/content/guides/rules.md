---
id: "rules"
group: "reference"
title: "Operator rules"
blurb: "Short do / don't checklist"
badge: "Ref"
badgeClass: "ref"
goal: "Stay consistent: Accept before Assign, use Live Map to check, Reject only when needed."
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
    body: "Standard path: Bookings list → Ride Details → Accept → Assign driver/vehicle/greeter. Live Map is a side check, not a substitute for Assign."
    icon: "check"
    related:
      - "accept-assign"
      - "live-map"
  - id: "data-hygiene"
    title: "Data hygiene"
    tease: "Bad master data breaks assign"
    body: "Inactive cars left Active, missing greeters, and stale driver phones all show up as assign failures. Fix master data in setup screens, not during a live Accept."
    icon: "drivers"
    related:
      - "drivers"
      - "vehicles"
      - "greeters"
---
