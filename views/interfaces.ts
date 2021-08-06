const houses: House[] = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: string;
}
type houseFilter = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: houseFilter): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: houseFilter): HouseWithID[];

function findHouses(houses: unknown, filter?: houseFilter): HouseWithID[] {
  if (typeof houses === "string") houses = JSON.parse(houses);

  let data: HouseWithID[] = (houses as House[]).map((el) => ({
    id: Math.random().toString(),
    ...el,
  }));

  if (filter) data = data.filter(filter);

  return data;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
