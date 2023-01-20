type User = {
  name: string;
}

type Users = {
  users: User[]
}

type UsersData = {
  [path: string]: Users;
}

const data: UsersData = {
  page1: {
    users: [
      { name: "Michael" },
      { name: "Sarah" },
      { name: "Bill" },
    ]
  },
  page2: {
    users: [
      { name: "Thomas" },
      { name: "George" },
    ]
  },
  page3: {
    users: [
      { name: "Eva" },
      { name: "Adam" },
    ]
  }
};

class DataService {
  public static instance: DataService;

  public static get id(): number {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }

    return DataService.instance.instanceID;
  }

  public static data(path: string): any {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }

    return DataService.instance.data(path);
  }

  private _instanceID: number;

  constructor() {
    this._instanceID = new Date().getTime();
    !process.env.BUILD && console.log(`[${new Date().toISOString()}] Data Service "${this._instanceID}" initialized!`);
  }

  private get instanceID(): number {
    return this._instanceID;
  }

  private data(path: string): any {
    return new Promise((resolve, reject) => {
      if (!path) {
        // Resolve immediately
        return resolve({});
      } else {
        // Fake network request
        setTimeout(() => {
          return data[path] ? resolve(data[path]) : resolve({});
        }, Math.random() * 1000);
      }
    });
  }
}

export default DataService;
