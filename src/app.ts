import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './db/models';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
// import { graphqlHTTP } from 'express-graphql';


async function main():Promise<void> {
  const server = express();
  server.use(cors());
  // server.use(morgan('dev'));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use('/:fav.ico', (req, res) => res.sendStatus(204));



    server.use(
    '/',
    graphqlHTTP({
      schema,
      // context: { pgApi },
      graphiql: true,
    })
  );

  server.listen(3000, () => {
    console.log(`Server URL: http://localhost:3000`);
  });

  sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  
}


main()