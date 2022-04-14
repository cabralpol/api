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
    level: number,
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
            const name: string = this.getDataValue('name');
            return name.toUpperCase();
        },
        set(value: string) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
            this.setDataValue('name', value);
        }
    },
    last_name: {
        type: DataTypes.STRING,
        get() {
            const name = this.getDataValue('last_name').toUpperCase();
            return name;
        },
        set(value: string) {
            value = value.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
                return a.toUpperCase();
            });
            this.setDataValue('last_name', value);
        }
    },     
    full_name: {
        type: DataTypes.VIRTUAL,
        get() {
            const name: string = this.getDataValue('name').toUpperCase();
            const last_name: string = this.getDataValue('last_name').toUpperCase();
            return `${name} ${last_name}`;
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
    level: { 
        type: DataTypes.INTEGER,
        defaultValue: 0,
        set(value: number) {
            if (value <= 0) {
                value = 0;
            }
            this.setDataValue('level', value);
        }
    },
    score: { 
        type: DataTypes.INTEGER,
        defaultValue: 0,
        set(value: number) {
            if (value <= 0) {
                value = 0;
            }
            this.setDataValue('score', value);
        }
    }
}, {
    tableName: 'players',
    /* Note: If timestamps: true is not set, sequelize assumes 
    that the field "createdAt" and "updatedAt" were created the 
    players table, the first is the date of creation of the 
    record and the second the date of modification of the record. */
    timestamps: false
});