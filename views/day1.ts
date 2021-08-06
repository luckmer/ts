interface House {
  name: string;
  planets: string | string[];
}

const house: Array<House> = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
  { name: "test", planets: ["Giedi Prime", "Arrakis"] },
];

type DataTestFind = (house: House) => boolean;

class Test {
  data: House[];
  filtered: House[];

  constructor() {
    this.data = [];
    this.filtered = [];
  }

  set(Name: House[]) {
    for (let i = 0; i < Name.length; i++) {
      const data = Name[i];
      this.data.push(data);
    }
  }

  filter(houses: House[], filter: DataTestFind) {
    if (typeof houses === "string") houses = JSON.parse(houses);
    let Find = houses.map((el) => el);

    return Find.filter(filter);
  }

  delete(name: DataTestFind) {
    const data = this.data;
    const Update = data.filter(name);
    this.data = Update;
  }

  get() {
    console.log(this.data);
  }
}

// const find = new Test();
// find.set(house);
// const result = find.filter(house, (el) => el.name === "test");
// find.delete(({ name }) => name !== "test");

//--------------------------------------------------------------

type mutation = (v: number) => number;
const CalcFunc = (numbers: number[], mutate: mutation) => numbers.map(mutate);
const Calc = CalcFunc([1, 2, 3, 7], (v) => {
  const val = v * v;
  return val % 2 === 0 ? v : val;
});
// console.log(Calc);

interface User {
  name: string;
  id: string;
  email?: string;
}

const users = [
  { name: "here", id: "12" },
  { name: "here", id: "1" },
];

const MapByUser = (users: User[]): Record<User["id"], Omit<User, "id">> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

// console.log(MapByUser(users));

class DogPanel {
  constructor(public readonly name: string, public readonly age: number) {}
}

const creator = new DogPanel("LG", 13);

class DogConstructor {
  private data: DogPanel[] = [];

  static instance: DogConstructor = new DogConstructor();

  private constructor() {}

  static addDog(dog: DogPanel) {
    DogConstructor.instance.data.push(dog);
  }

  getDogs() {
    return this.data;
  }
}

DogConstructor.addDog(creator);
console.log(DogConstructor.instance.getDogs());
