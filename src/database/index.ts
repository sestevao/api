import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async(): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        //takes an object and changes a field
        Object.assign(defaultOptions, {
            database: 
                process.env.NODE_ENV === "test" ? "./src/database/database.test.sqlite" : defaultOptions.database
        })
    );
}

