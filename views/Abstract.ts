function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger("text");

function CreateLogger() {
  return class Class {
    private completeLog: string = "";
    log(str: string) {
      this.completeLog += str + "\n";
    }
    dump() {
      return this.completeLog;
    }
  };
}

const MyLogger = CreateLogger();
const logger2 = new MyLogger();
logger2.log("foo");
console.log(logger2.dump());

function CreateSimpleMemory<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, Value: T) {
      this.db[id] = Value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
  };
}

const stringDatabase = CreateSimpleMemory<string>();

const sdb1 = new stringDatabase();
sdb1.set("a", "ds");

function Dump(Base) {
  return class DumpClass extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}
