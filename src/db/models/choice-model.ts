import { DataTypes } from "sequelize";
import pgDb from "../pg";

const ChoiceModel = pgDb.define('Choice', {
    // Model attributes are defined here
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    votes: {
        type: DataTypes.INTEGER
    }
});

console.log(ChoiceModel === pgDb.models.Choice); // true


export default ChoiceModel;