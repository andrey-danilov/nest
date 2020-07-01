import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from "../../model/users/user.entity";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find().then(value => {
            return value
        });
    }

    async getById( id: number ) {
        //const user = await this.usersRepository.findOne(id).then(value => {return value});
        return {
            access_token: this.jwtService.sign({user: 'user'})
        }
    }

    save() {
        this.usersRepository.save({id: 0, firstName: 'test-save', lastName: 'test-2', isActive: false})
    }
}