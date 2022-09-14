import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import pgDb from './db/pg';


async function main(): Promise<void> {
  const server = express();
  server.use(cors());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use('/:fav.ico', (req, res) => res.sendStatus(204));

  pgDb.sync({ force: true })
    .then(() => {
      console.log("Synced db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });




  server.use(
    '/',
    graphqlHTTP({
      schema:schema,
      graphiql: true,
    })
  );

  server.listen(3000, () => {
    console.log(`Server URL: http://localhost:3000`);
  });



}


main()