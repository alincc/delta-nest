"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.DatabaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: () => mongoose.connect("mongodb://localhost/delta", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }
];
//# sourceMappingURL=database.provider.js.map