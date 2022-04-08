import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';
// import { sequelize } from '../instances/postgres';


// Create type for Typescript
export interface PlayerTypes extends Model {
    id:number,
    name: string,
    last_name: string,
    email: string,    
    score: number,
    age: number
}

// Create type for Sequelize
const modelName: string = 'Player';
export const PlayerModel = sequelize.define<PlayerTypes>(modelName, {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('name').toUpperCase();
        }
    },
    last_name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('last_name').toUpperCase();
        }
    },     
    full_name: {
        type: DataTypes.VIRTUAL,
        get() {
            let name: string = this.getDataValue('name').toUpperCase();
            let full_name: string = this.getDataValue('last_name').toUpperCase();
            return `${name} ${full_name}`;
        }
    },
    email: { 
        type: DataTypes.STRING 
    },    
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(value: number) {
            if (value < 18) {
                value = 18;
            }
            this.setDataValue('age', value);
        }
    },
    score: { 
        type: DataTypes.INTEGER 
    }
}, {
    tableName: 'players',
    /* Note: If timestamps: true is not set, sequelize assumes 
    that the field "createdAt" and "updatedAt" were created the 
    players table, the first is the date of creation of the 
    record and the second the date of modification of the record. */
    timestamps: false
});