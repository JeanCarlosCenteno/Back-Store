import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";



@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [],
    controllers: [],
})
export class ProductModule {}