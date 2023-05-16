import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from './user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return 'hello';
  }
  @Post('create')
  async create(@Body() user: UserDto, @Res() res: Response){
  console.log("🚀 ~ file: user.controller.ts:16 ~ AppController ~ create ~ user:", user)

   const result = await this.userService.create(user)
    console.log("🚀 ~ file: user.controller.ts:19 ~ AppController ~ create ~ result:", result)
    res.json({
      result
    })
  }
}
