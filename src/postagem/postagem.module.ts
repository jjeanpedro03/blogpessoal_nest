import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entities/postagem.entity.js';
import { PostagemService } from './services/postagem.service.js';
import { PostagemController } from './controllers/postagem.controller.js';
import { TemaModule } from '../tema/tema.module.js';

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}