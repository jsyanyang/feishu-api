import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { User } from 'src/model/User';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    // @InjectRepository(User)
    // private userRepository: Repository<User>
  ){

  }

  create(user: UserDto){
    // return this.userRepository.save(user)
  }
}
