import { Injectable } from '@nestjs/common';
import {Sequelize} from "sequelize";

@Injectable()
export class DatabaseService {

    private sequelize:Sequelize = null
    constructor() {
        this.sequelize = new Sequelize({
            dialect: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'cw',
            password: '123456',
            database: 'graph',
            pool:{
                max: 5,
                min: 0
            }
        });
    }
    public getInstance():Sequelize{
        return this.sequelize;
    }

   public async tryConnection() {

       try {
           await this.sequelize.authenticate();
           console.log('OK')
       } catch (error) {
           console.error(error)
       }
   }
}
