import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';


const Choice = new GraphQLObjectType({
    name: "Choice",
    fields:{
        id: {type: new GraphQLNonNull(GraphQLID)},
        text: {type: new GraphQLNonNull(GraphQLString)},
        votes: {type: new GraphQLNonNull(GraphQLInt)}
    }
});

export default Choice;