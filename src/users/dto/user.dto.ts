import { IsNotEmpty, IsNumber, IsString, MaxLength, IsOptional} from 'class-validator';


export class createUserDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    password: string;

    @IsNumber()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    sexo: string;

    @IsNumber()
    @IsOptional()
    active: boolean;
}