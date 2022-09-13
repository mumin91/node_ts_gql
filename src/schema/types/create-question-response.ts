import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
} from 'graphql';
import Choice from './choice';
import Question from './question';



const CreateQuestionRespones = new GraphQLObjectType({
    name: 'CreateQuestionRespones',
    fields: () => ({
        question: { type: new GraphQLNonNull(Question) },
        choices: {type: new GraphQLList(Choice)}
    }),
});

export default CreateQuestionRespones;
