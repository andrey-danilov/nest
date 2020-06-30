import {Controller, Get, Param} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll() {
        this.usersService.findAll().then(value => {console.log(value)})
    }

    @Get(':id')
    getById(@Param('id') id) {
        this.usersService.getById(id).then(value => {console.log(value)})
    }
}
