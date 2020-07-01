import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "../../model/users/user.entity";
import {ApiParam} from "@nestjs/swagger";

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.findAll()
    }

    @Get(':id')
    @ApiParam({ name: 'id', required: true})
    getById(@Param() id: number, @Query() query: any) {
        console.log(id)
        console.log(query)
        return this.usersService.getById(id)
    }

    @Post()
    saveUser(@Body() user: User) {
        console.log(user)
        //this.usersService.save();
    }
}
