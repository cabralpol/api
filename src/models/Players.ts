import { Schema, Model, model, connection } from 'mongoose';

// Create User type
type UserType = {
    name: {
        firstName: string,
        lastName: string
    },
    age: number,
    score: number,
    email: string,
    interests:string[]
};

// Create shema
const schema = new Schema<UserType>({
    name: {
        firstName: { type: String, required: true },
        lastName: String
    },
    age: { type: Number, required: true },
    score: Number,
    email: { type: String, required: true },
    interests: [String]
});

//export default model<Usertype>(modelName, schema);
const modelName: string = 'User';
const userModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UserType>) : model<UserType>(modelName, schema)

export default userModel;