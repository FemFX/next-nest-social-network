import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/User";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: typeof User,
    private jwtService: JwtService
  ) {}
  async login(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.validateUser(loginUserDto);
    return this.generateToken(user);
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    const { name, email, password } = createUserDto;
    const candidate = await this.userRepository.findOne({ email });
    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email уже существует",
        HttpStatus.BAD_REQUEST
      );
    }
    const hashedPass = await bcrypt.hash(password, 12);
    const newUser = await this.userRepository.create({
      name,
      email,
      password: hashedPass,
    });
    newUser.save();
    return this.generateToken(newUser);
  }
  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
  private async validateUser(userDto: CreateUserDto | LoginUserDto) {
    const { email } = userDto;
    const user = await this.userRepository.findOne({ email });
    const passworEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passworEquals) {
      return user;
    }
    throw new HttpException(
      "Некоректный email или пароль",
      HttpStatus.FORBIDDEN
    );
  }

}
