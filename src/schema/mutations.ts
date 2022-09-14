import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } from 'graphql';
import ChoiceModel from '../db/models/choice-model';
import QuestionModel from '../db/models/question-model';
import CreateQuestionRespones from './types/create-question-response';
import Question from './types/question';

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
        vote:{
            type: new GraphQLNonNull(Question),
            args: {
                questionId: {type: GraphQLString},
                choiceId: {type: GraphQLString},
            },
            resolve:async (source:any, {questinoId, choiceId}) => {
                console.log({ questinoId, choiceId });
                
                const choice = await ChoiceModel.findByPk(choiceId);
                const updatedChoice = await choice.increment('votes');
                const question = await QuestionModel.findByPk(parseInt(questinoId));
                return { ...question.toJSON(), choices: question.get("Choices") };
            }
        }
    }),
});

export default MutationType;