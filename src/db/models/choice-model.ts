import { DataTypes } from "sequelize";
import pgDb from "../pg";

const ChoiceModel = pgDb.define('Choice', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    votes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
});

console.log(ChoiceModel === pgDb.models.Choice); // true


export default ChoiceModel;