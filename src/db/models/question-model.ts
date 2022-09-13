import { DataTypes } from "sequelize";
import pgDb from "../pg";
import ChoiceModel from "./choice-model";

const QuestionModel = pgDb.define('Question', {
    // Model attributes are defined here
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.DATE
    }
});

QuestionModel.hasMany(ChoiceModel);

// `sequelize.define` also returns the model
console.log(QuestionModel === pgDb.models.Question); // true

export default QuestionModel;