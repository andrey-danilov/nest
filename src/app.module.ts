import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AppService } from './app.service';


import {User} from "./model/users/user.entity";
import {UsersController} from "./modules/User/users.controller";
import {UsersService} from "./modules/User/users.service";
import {UsersModule} from "./modules/User/users.module";
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [User],
      synchronize: true,
    }),
    JwtModule.register({
      secret: '5947CE87AA6ADBCB3194EAB57C40C21135DA7CBC7BEE846472B5EA68E3F172D4',
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
