import * as mongoose from "mongoose";
export const DatabaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect("mongodb://localhost/delta", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
  }
];
