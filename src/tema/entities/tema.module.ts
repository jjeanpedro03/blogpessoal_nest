import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "../entities/tema.entity.js";

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [],
    controllers: [],
    exports: []
})
export class TemaModule {}