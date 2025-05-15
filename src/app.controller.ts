import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import dotenv, { config } from 'dotenv';

config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('/demo')
  async demoMethod(@Req() req : Request, @Res() res: Response) {
    const { status, message } =  await this.appService.findAll();

    return res.json({
      status, message
    })
    // res.json(
    //   {
    //     status: "true",
    //     message : "Server is Running at "
    //   }
    // )
  }
}
