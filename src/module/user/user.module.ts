import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/User';
import { Company } from 'src/entities/Company';
import { CompanyUser } from 'src/entities/CompanyUser';
import { UserDepartment } from 'src/entities/UserDepartment';
import { Department } from 'src/entities/Department';
import { Emotion } from 'src/entities/Emotion';
import { Group } from 'src/entities/Group';
import { Message } from 'src/entities/Message';
import { Reply } from 'src/entities/Reply';
import { UserGroup } from 'src/entities/UserGroup';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Company,
      CompanyUser,
      UserDepartment,
      Department,
      Emotion,
      Group,
      Message,
      Reply,
      UserGroup
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule { }
