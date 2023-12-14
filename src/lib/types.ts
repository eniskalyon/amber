import { links, fleet } from "./data";

export type SectionName = (typeof links)[number]["name"];

// Define a type for a single car in the fleet
export type Car = {
    id: number;
    name: string;
    image: string;
  };
  
  // If you want to create a type for the entire fleet array
  export type FleetArray = typeof fleet;
