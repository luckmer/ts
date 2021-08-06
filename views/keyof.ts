// function pluck<DataType, keyType extends keyof DataType>(
//   items: DataType[],
//   key: keyType
// ): DataType[keyType][] {
//   return items.map((item) => item[key]);
// }

// const dogs = [{ name: "mini" }, { name: "lg" }];

// interface BaseEvent {
//   time: number;
//   user: string;
// }

// interface EventMap {
//   addToCart: BaseEvent & { quantity: number; productId: string };
//   checkout: BaseEvent;
// }

// function sendEvent<Name extends keyof EventMap>(
//   name: string,
//   data: EventMap[Name]
// ): void {
//   console.log([name, data]);
// }

// sendEvent("addToCart", {
//   productId: "foo",
//   user: "baz",
//   quantity: 1,
//   time: 10,
// });
// sendEvent("checkout", { time: 20, user: "bob" });

interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type MyUsers = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUsers): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "das",
      id: "das",
      email: "baz",
    },
    {}
  )
);

type Need = Required<MyUser>;
type JustEmail = Pick<MyUser, "email" | "name">;

const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      name: "here",
      id: "12",
    },
  ])
);
