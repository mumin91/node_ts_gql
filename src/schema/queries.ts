import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  printSchema,
  GraphQLList,
} from 'graphql';
import ChoiceModel from '../db/models/choice-model';
import QuestionModel from '../db/models/question-model';

import Question from './types/question';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getQuestions: {
            type: new GraphQLList(new GraphQLNonNull(Question)),
            resolve:async (source:any) => {
                const questions = await QuestionModel.findAll({
                    attributes: ['id', 'text', 'publishDate'],
                    order: ['publishDate'],
                });
                
                const response = questions.map(question => {
                    return { ...question.toJSON(), choices: question.get("Choices") };
                })

                return response;
            }
        }
    },
})

export default QueryType;
