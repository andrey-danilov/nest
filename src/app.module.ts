import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import {User} from "./model/users/user.entity";
import {UsersController} from "./modules/User/users.controller";
import {UsersService} from "./modules/User/users.service";
import {UsersModule} from "./modules/User/users.module";

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
    UsersModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
