import { createDatabase } from "db0";
import postgresql from "db0/connectors/postgresql";

export const db = createDatabase(
    postgresql({
        user: 'postgres',
        database: 'postgres',
        password: 'pizzaadmin',
        host: '31.128.40.45',
        port: 5432
    }),
);
