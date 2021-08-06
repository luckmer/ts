// filter
interface House {
  name: string;
  planets: string | string[];
}

const Name: Array<House> = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
  { name: "test", planets: ["Giedi Prime", "Arrakis"] },
];

type DataFilter = (house: House) => boolean;

class Filter {
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

  filter(houses: House[], filter?: DataFilter) {
    if (typeof houses === "string") houses = JSON.parse(houses);

    let data = (houses as House[]).map((el) => el);

    if (filter) data = data.filter(filter);

    console.log(`FILTERED : `, data);
  }

  delete(name: string) {
    const data = this.data;
    const Update = data.filter((item) => item.name !== name);
    this.data = Update;
  }

  get() {
    console.log(this.data);
  }
}

const ss = new Filter();

ss.set(Name);
ss.filter(Name, ({ name }) => name === "test");
ss.delete("Harkonnen");
ss.get();
