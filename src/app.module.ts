import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Sample } from './sample.entity';

config();
const isProd = process.env.NODE_ENV === 'production';
@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'mydb',
      autoLoadEntities: true,
      synchronize: true,
      ssl: isProd ? { rejectUnauthorized: false } : false,
    }),
  // TypeOrmModule.forRoot({
  //   type: 'postgres',
  //   host: 'mainline.proxy.rlwy.net',
  //   port: 44494,
  //   username: 'postgres',
  //   password: 'hQSmwRfOYdxXYZAfrkDmOjdsNoSqCoAY',
  //   database: 'railway',
  //   autoLoadEntities: true,
  //   synchronize: true, // Be careful with this in production
  // }),

  TypeOrmModule.forFeature([Sample])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
