import { Schema, Model, model, connection } from 'mongoose';

// Create type for Typescript
type PlayerType = {
    email: string,
    name: string,
    score: number,
    age: number
};

// Create type for Shema Mongoose
const schema = new Schema<PlayerType>({
    email: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    score: { type: Number }
});

// Exporting model
const modelName: string = 'Player';
const PlayerModel = (connection && connection.models[modelName]) ? 
(connection.models[modelName] as Model<PlayerType>) : 
model<PlayerType>(modelName, schema);

export default PlayerModel;