import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("login")
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }
  @Post("register")
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
