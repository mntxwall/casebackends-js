import { Injectable } from '@nestjs/common';
import {DatabaseService} from "./database.service";
import {DataType} from "sequelize-typescript";

@Injectable()
export class WebTableService {

    private Web
    constructor(private dbService: DatabaseService,) {

        this.Web = dbService.getInstance().define("web",{
            name: DataType.INTEGER,
            vertexa: DataType.TEXT,
            vertexb: DataType.TEXT,
            sourcefrom: DataType.TEXT,
            weight:{
                type: DataType.INTEGER,
                defaultValue: 0
            }
        });

        (async () =>{
            await dbService.getInstance().sync()
        })();

    }

    async addUser() {
        const jane = this.Web.build({
            vertexa: '2', vertexb: '2', sourcefrom: '2'
        });
        await jane.save();
    }
}
