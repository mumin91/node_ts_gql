import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  printSchema,
  GraphQLList,
} from 'graphql';

import Question from './types/question';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        questions: {
            type: new GraphQLList(new GraphQLNonNull(Question))
        }
    },
})

export default QueryType;
