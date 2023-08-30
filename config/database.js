const path = require("path");

/* module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres");
  console.log("client");

  const connections = {
    mysql: {
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    mysql2: {
      connection: {
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false) && {
          key: env("DATABASE_SSL_KEY", undefined),
          cert: env("DATABASE_SSL_CERT", undefined),
          ca: env("DATABASE_SSL_CA", undefined),
          capath: env("DATABASE_SSL_CAPATH", undefined),
          cipher: env("DATABASE_SSL_CIPHER", undefined),
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    postgres: {
      connection: {
        client: "postgres",
        connection: {
          host: env("POSTGRES_HOST", "localhost"), // Use your PostgreSQL host from environment variable
          port: env.int("DATABASE_PORT", 5432), // You may need to adjust the port if it's different
          database: env("POSTGRES_DATABASE", "your-database-name"), // Use POSTGRES_DATABASE as the database name
          username: env("POSTGRES_USER", "your-username"), // Use POSTGRES_USER as the username
          password: env("POSTGRES_PASSWORD", "your-password"), // Use POSTGRES_PASSWORD as the password
          ssl: env.bool("DATABASE_SSL", false), // Set this to true if you need SSL
        },
        debug: false,
        //useNullAsDefault: true,
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", "data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
}; */

// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST", "localhost"), // Use your PostgreSQL host from environment variable
      port: env.int("DATABASE_PORT", 5432), // You may need to adjust the port if it's different
      database: env("POSTGRES_DATABASE", "your-database-name"), // Use POSTGRES_DATABASE as the database name
      user: env("POSTGRES_USER", "your-username"), // Use POSTGRES_USER as the username
      password: env("POSTGRES_PASSWORD", "your-password"), // Use POSTGRES_PASSWORD as the password
      ssl: {
        rejectUnauthorized: false, // This line disables certificate validation
      },
    },
    options: {
      ssl: true, // Enable SSL mode
    },
    debug: false,
  },
});
