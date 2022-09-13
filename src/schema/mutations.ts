import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import ChoiceModel from '../db/models/choice-model';
import QuestionModel from '../db/models/question-model';
import CreateQuestionRespones from './types/create-question-response';

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createQuestion: {
            type: new GraphQLNonNull(CreateQuestionRespones),
            args: {
                text: { type: new GraphQLNonNull(GraphQLString) },
                choices: { type: new GraphQLList(GraphQLString) },
            },
            resolve: async (source, { text, choices }) => {
                const newQuestion = await QuestionModel.create({ text: text });
                const choiceList = [];
                if (choices) {
                    for (const i in choices) {
                        const c = await ChoiceModel.create({ text: choices[i], QuestionId: newQuestion.get("id") });
                        choiceList.push(c.toJSON());
                    }
                }

                return { question: newQuestion.toJSON(), choices: choiceList};
            },
        },
    }),
});

export default MutationType;