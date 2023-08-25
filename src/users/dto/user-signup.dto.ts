/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { UserSingnInDto } from './user-signin.dto';

export class UserSignUpDto extends UserSingnInDto{
    @IsNotEmpty({ message: 'Name can not be null!' })
    @IsString({ message: 'Name should be string' })
    name: string;
}

