import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import Choice from './choice';


const Question = new GraphQLObjectType({
    name: "Question",
    fields:{
        id: {type: new GraphQLNonNull(GraphQLID)},
        text: {type: new GraphQLNonNull(GraphQLString)},
        publishDate: {type: GraphQLString},
        choices: {type: new GraphQLList(Choice)}
    },
});

export default Question;