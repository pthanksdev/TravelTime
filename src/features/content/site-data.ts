export type Tour = {
  name: string;
  days: number;
  region: string;
  price: string;
};

export type Destination = {
  city: string;
  country: string;
  focus: string;
};

export const tours: Tour[] = [
  { name: "Nordic Lights Escape", days: 7, region: "Iceland", price: "$2,390" },
  { name: "Mediterranean Coastline", days: 9, region: "Italy", price: "$2,980" },
  { name: "Ancient Wonders Route", days: 11, region: "Jordan", price: "$3,250" },
  { name: "Bali Reset Program", days: 6, region: "Indonesia", price: "$1,840" },
  { name: "Andes and Salt Flats", days: 10, region: "Bolivia", price: "$2,770" },
  { name: "Japan in Bloom", days: 8, region: "Japan", price: "$3,100" }
];

export const destinations: Destination[] = [
  { city: "Kyoto", country: "Japan", focus: "Culture and food" },
  { city: "Reykjavik", country: "Iceland", focus: "Nature and adventure" },
  { city: "Lisbon", country: "Portugal", focus: "City break" },
  { city: "Cusco", country: "Peru", focus: "History and trekking" },
  { city: "Cape Town", country: "South Africa", focus: "Scenic routes" },
  { city: "Queenstown", country: "New Zealand", focus: "Outdoor activities" }
];

export const testimonials = [
  { quote: "Everything felt curated, never rushed.", name: "Mia T." },
  { quote: "The planning quality saved us days of logistics.", name: "Ari L." },
  { quote: "Clear itinerary, excellent guides, zero stress.", name: "Noah R." }
];
