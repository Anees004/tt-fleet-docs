---
id: "rules"
group: "reference"
title: "Reglas del operador"
blurb: "Checklist breve de sí / no"
badge: "Ref"
badgeClass: "ref"
goal: "Mantener operaciones coherentes: Aceptar antes de Asignar, revisar Mapa en vivo, mantener los datos maestros honestos, Rechazar solo cuando haga falta."
image: null
icon: "rules"
steps:
  - "Aceptar (cuando se requiera) antes de Asignar."
  - "Revisa Mapa en vivo para conductores en línea cerca de la recogida."
  - "Mantén veraces los estados Activo de Conductores, Vehículos y Greeters."
  - "Rechaza solo cuando la flota no vaya a tomar el viaje."
points:
  - id: "order-of-ops"
    title: "Orden de operaciones"
    tease: "Lista → Detalle → Aceptar → Asignar"
    body: "Ruta estándar: Lista de reservas → Detalles del viaje → Aceptar → Asignar conductor/vehículo/greeter. Mapa en vivo es una comprobación lateral, no un sustituto de Asignar. Los pasos completos están en Aceptar y asignar y Mapa en vivo."
    icon: "check"
    related:
      - "accept-assign"
      - "live-map"
      - "bookings-list"
  - id: "data-hygiene"
    title: "Higiene de datos"
    tease: "Datos maestros malos rompen la asignación"
    body: "Coches inactivos dejados como Activo, greeters faltantes y teléfonos de conductor obsoletos aparecen como fallos de asignación. Corrige Conductores, Vehículos y Greeters en la configuración — no a mitad de Aceptar en una reserva en vivo."
    icon: "drivers"
    related:
      - "drivers"
      - "vehicles"
      - "greeters"
---
