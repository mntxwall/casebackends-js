import {Controller, Get, HttpStatus, Post, Res, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
//import { PrismaService } from './prisma.service';

import * as iconv from 'iconv-lite'


// @ts-ignore
import { Web as WebModel } from '@prisma/client';
import {Response} from "express";
import {FilesInterceptor} from "@nestjs/platform-express";
import {Sequelize} from "sequelize";
import {DatabaseService} from "./database.service";
import {WebTableService} from "./web-table.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
   // private prisma: PrismaService,
    private dbService: DatabaseService,
    private webService: WebTableService,
  ) {}

  @Get()
  async getHello(@Res() res: Response) {
    ///return this.appService.getHello();

    res.status(HttpStatus.OK).json({result:1})


    //this.appService.getHello();
    //await this.dbService.tryConnection();
    await this.webService.addUser();

    ///console.log(this.prisma.web.findMany())

  }

  @Get('hello')
  async setHello(@Res() res: Response) {
    //this.appService.setHello()
    res.status(HttpStatus.OK).json({result: 2})






  }

  @Get('webs')
  async getAllWebs() {
  //  return this.prisma.web.findMany();

  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files[]', null))
  uploadFile(@UploadedFiles() files, @Res() res: Response){
    res.status(HttpStatus.OK).json({result:1})

    files.forEach(file => {
      //console.log(Buffer.from(file.buffer).toString())
      console.log(iconv.decode(Buffer.from(file.buffer), 'GBK'))
    })
  }
}
