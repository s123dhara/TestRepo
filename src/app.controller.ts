import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
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
  demoMethod(@Res() res: Response) {
    res.json(
      {
        status: "true",
        message : "Server is Running at "
      }
    )
  }
}
