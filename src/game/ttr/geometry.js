// Stylized NSW map for Ticket to Ride NSW — station positions and the
// outline are hand-placed to *read* as New South Wales, not surveyed to
// real coordinates. Balanced for gameplay first, geography second.

export const TRAIN_COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];

// A stylized NSW silhouette: SA/Vic border roughly straight west, QLD
// border with the Barwon River notch, a bulging east coastline, and the
// Murray River wobble along the south.
export const NSW_OUTLINE = [
  [70, 60],
  [430, 55],
  [440, 140],
  [620, 120],
  [700, 160],
  [760, 230],
  [790, 300],
  [830, 360],
  [790, 420],
  [760, 480],
  [720, 560],
  [660, 630],
  [560, 660],
  [300, 640],
  [150, 610],
  [70, 600],
];

export const STATIONS = [
  // Airport/East Hills corridor — the spine through Sydney's south-west.
  { id: "campbelltown", name: "Campbelltown", x: 650, y: 470 },
  { id: "glenfield", name: "Glenfield", x: 680, y: 460 },
  { id: "east-hills", name: "East Hills", x: 710, y: 450 },
  { id: "airport", name: "Airport", x: 745, y: 440 },
  { id: "sydney", name: "Sydney", x: 770, y: 425 },

  // Greater Sydney
  { id: "parramatta", name: "Parramatta", x: 700, y: 410 },
  { id: "liverpool", name: "Liverpool", x: 670, y: 440 },
  { id: "penrith", name: "Penrith", x: 640, y: 390 },
  { id: "hornsby", name: "Hornsby", x: 760, y: 370 },
  { id: "sutherland", name: "Sutherland", x: 740, y: 470 },

  // North Coast
  { id: "gosford", name: "Gosford", x: 780, y: 340 },
  { id: "newcastle", name: "Newcastle", x: 810, y: 300 },
  { id: "port-macquarie", name: "Port Macquarie", x: 785, y: 260 },
  { id: "coffs-harbour", name: "Coffs Harbour", x: 755, y: 200 },
  { id: "tweed-heads", name: "Tweed Heads", x: 700, y: 140 },

  // South Coast
  { id: "wollongong", name: "Wollongong", x: 735, y: 480 },
  { id: "nowra", name: "Nowra", x: 710, y: 520 },
  { id: "batemans-bay", name: "Batemans Bay", x: 680, y: 570 },
  { id: "bega", name: "Bega", x: 650, y: 610 },

  // Southern Inland
  { id: "goulburn", name: "Goulburn", x: 630, y: 510 },
  { id: "canberra", name: "Canberra", x: 610, y: 560 },
  { id: "wagga-wagga", name: "Wagga Wagga", x: 470, y: 560 },
  { id: "albury", name: "Albury", x: 420, y: 610 },

  // Central West
  { id: "katoomba", name: "Katoomba", x: 610, y: 420 },
  { id: "lithgow", name: "Lithgow", x: 580, y: 400 },
  { id: "bathurst", name: "Bathurst", x: 540, y: 400 },
  { id: "orange", name: "Orange", x: 490, y: 390 },
  { id: "dubbo", name: "Dubbo", x: 440, y: 340 },
  { id: "parkes", name: "Parkes", x: 420, y: 400 },

  // Far West
  { id: "broken-hill", name: "Broken Hill", x: 130, y: 420 },

  // North West
  { id: "tamworth", name: "Tamworth", x: 530, y: 240 },
  { id: "armidale", name: "Armidale", x: 600, y: 190 },
  { id: "moree", name: "Moree", x: 450, y: 150 },
  { id: "narrabri", name: "Narrabri", x: 460, y: 220 },

  // Riverina
  { id: "griffith", name: "Griffith", x: 350, y: 470 },
  { id: "deniliquin", name: "Deniliquin", x: 280, y: 540 },
];

export const ROUTES = [
  // Airport/East Hills corridor
  { id: "sydney-airport", a: "sydney", b: "airport", length: 1, color: "blue" },
  { id: "airport-east-hills", a: "airport", b: "east-hills", length: 1, color: "orange" },
  { id: "east-hills-glenfield", a: "east-hills", b: "glenfield", length: 1, color: "yellow" },
  { id: "glenfield-campbelltown", a: "glenfield", b: "campbelltown", length: 1, color: "green" },

  // Greater Sydney
  { id: "sydney-parramatta", a: "sydney", b: "parramatta", length: 2, color: "red" },
  { id: "sydney-hornsby", a: "sydney", b: "hornsby", length: 2, color: "purple" },
  { id: "sydney-sutherland", a: "sydney", b: "sutherland", length: 2, color: "black" },
  { id: "parramatta-liverpool", a: "parramatta", b: "liverpool", length: 2, color: "white" },
  { id: "parramatta-penrith", a: "parramatta", b: "penrith", length: 2, color: "gray" },
  { id: "liverpool-campbelltown", a: "liverpool", b: "campbelltown", length: 2, color: "blue" },

  // North Coast chain
  { id: "sutherland-wollongong", a: "sutherland", b: "wollongong", length: 3, color: "green" },
  { id: "hornsby-gosford", a: "hornsby", b: "gosford", length: 3, color: "orange" },
  { id: "gosford-newcastle", a: "gosford", b: "newcastle", length: 3, color: "yellow" },
  { id: "newcastle-port-macquarie", a: "newcastle", b: "port-macquarie", length: 4, color: "red" },
  { id: "port-macquarie-coffs-harbour", a: "port-macquarie", b: "coffs-harbour", length: 4, color: "purple" },
  { id: "coffs-harbour-tweed-heads", a: "coffs-harbour", b: "tweed-heads", length: 4, color: "black" },

  // South Coast + Southern Inland
  { id: "wollongong-nowra", a: "wollongong", b: "nowra", length: 2, color: "white" },
  { id: "nowra-batemans-bay", a: "nowra", b: "batemans-bay", length: 3, color: "gray" },
  { id: "batemans-bay-bega", a: "batemans-bay", b: "bega", length: 3, color: "green" },
  { id: "bega-canberra", a: "bega", b: "canberra", length: 4, color: "orange" },
  { id: "canberra-goulburn", a: "canberra", b: "goulburn", length: 2, color: "yellow" },
  { id: "goulburn-sydney", a: "goulburn", b: "sydney", length: 3, color: "red" },
  { id: "goulburn-bathurst", a: "goulburn", b: "bathurst", length: 4, color: "purple" },

  // Central West
  { id: "penrith-katoomba", a: "penrith", b: "katoomba", length: 2, color: "black" },
  { id: "katoomba-lithgow", a: "katoomba", b: "lithgow", length: 1, color: "white" },
  { id: "lithgow-bathurst", a: "lithgow", b: "bathurst", length: 2, color: "gray" },
  { id: "bathurst-orange", a: "bathurst", b: "orange", length: 2, color: "green" },
  { id: "orange-dubbo", a: "orange", b: "dubbo", length: 3, color: "orange" },
  { id: "orange-parkes", a: "orange", b: "parkes", length: 2, color: "yellow" },

  // Riverina
  { id: "parkes-griffith", a: "parkes", b: "griffith", length: 3, color: "red" },
  { id: "griffith-deniliquin", a: "griffith", b: "deniliquin", length: 3, color: "purple" },
  { id: "deniliquin-albury", a: "deniliquin", b: "albury", length: 3, color: "black" },
  { id: "albury-wagga-wagga", a: "albury", b: "wagga-wagga", length: 2, color: "white" },
  { id: "wagga-wagga-griffith", a: "wagga-wagga", b: "griffith", length: 3, color: "gray" },
  { id: "wagga-wagga-canberra", a: "wagga-wagga", b: "canberra", length: 3, color: "green" },

  // North West
  { id: "dubbo-parkes", a: "dubbo", b: "parkes", length: 2, color: "orange" },
  { id: "dubbo-tamworth", a: "dubbo", b: "tamworth", length: 4, color: "yellow" },
  { id: "tamworth-armidale", a: "tamworth", b: "armidale", length: 2, color: "red" },
  { id: "armidale-tweed-heads", a: "armidale", b: "tweed-heads", length: 4, color: "purple" },
  { id: "tamworth-narrabri", a: "tamworth", b: "narrabri", length: 3, color: "black" },
  { id: "narrabri-moree", a: "narrabri", b: "moree", length: 2, color: "white" },
  { id: "moree-dubbo", a: "moree", b: "dubbo", length: 5, color: "gray" },

  // Far West
  { id: "griffith-broken-hill", a: "griffith", b: "broken-hill", length: 6, color: "green" },
  { id: "parkes-broken-hill", a: "parkes", b: "broken-hill", length: 5, color: "orange" },
];

export const DESTINATIONS = [
  { id: "d1", a: "sydney", b: "broken-hill", points: 20 },
  { id: "d2", a: "sydney", b: "tweed-heads", points: 12 },
  { id: "d3", a: "sydney", b: "albury", points: 14 },
  { id: "d4", a: "sydney", b: "bega", points: 10 },
  { id: "d5", a: "sydney", b: "dubbo", points: 8 },
  { id: "d6", a: "campbelltown", b: "canberra", points: 6 },
  { id: "d7", a: "parramatta", b: "newcastle", points: 5 },
  { id: "d8", a: "griffith", b: "newcastle", points: 15 },
  { id: "d9", a: "broken-hill", b: "tweed-heads", points: 22 },
  { id: "d10", a: "dubbo", b: "batemans-bay", points: 12 },
  { id: "d11", a: "wagga-wagga", b: "coffs-harbour", points: 16 },
  { id: "d12", a: "moree", b: "canberra", points: 14 },
  { id: "d13", a: "penrith", b: "bathurst", points: 4 },
  { id: "d14", a: "hornsby", b: "moree", points: 10 },
  { id: "d15", a: "sutherland", b: "nowra", points: 4 },
  { id: "d16", a: "deniliquin", b: "sydney", points: 13 },
  { id: "d17", a: "tamworth", b: "sydney", points: 9 },
  { id: "d18", a: "orange", b: "sydney", points: 6 },
  { id: "d19", a: "parkes", b: "newcastle", points: 11 },
  { id: "d20", a: "armidale", b: "griffith", points: 18 },
];

export const ROUTE_POINTS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 10, 6: 15 };

export function stationName(id) {
  return STATIONS.find((s) => s.id === id)?.name || id;
}
