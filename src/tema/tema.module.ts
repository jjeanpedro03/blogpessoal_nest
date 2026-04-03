import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity.js';
import { TemaController } from './controllers/tema.controller.js';
import { TemaService } from './services/tema.service.js';

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    controllers: [TemaController],
    providers: [TemaService],
    exports: [TemaService]
})
export class TemaModule {}