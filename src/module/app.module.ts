import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/model/User';
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "app",
      synchronize: true,
      // logging: true,
      username: "test",
      password: "test123",
      entities: [User],
      // migrations: [],
      // subscribers: [],
      // autoLoadEntities: true
    }),
    // TypeOrmModule.forFeature([
    //   User
    // ]),
    UserModule
  ],
  // controllers: [
  //   UserController
  // ],
  // providers: [
  //   UserService
  // ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
 }
