import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User} from "../../model/users/user.entity";
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: '5947CE87AA6ADBCB3194EAB57C40C21135DA7CBC7BEE846472B5EA68E3F172D4',
            signOptions: { expiresIn: '60s' },
          })
    ],
    exports: [TypeOrmModule],
    providers: [UsersService, JwtStrategy],
    controllers: [UsersController],
})
export class UsersModule {}