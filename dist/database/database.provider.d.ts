import * as mongoose from "mongoose";
export declare const DatabaseProviders: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
