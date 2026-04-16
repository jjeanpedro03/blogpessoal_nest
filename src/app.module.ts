import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; 
import { PostagemModule } from './postagem/postagem.module.js';
import { TemaModule } from './tema/tema.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';
import { AppController } from './app.controller.js';
import { ProdService } from './data/services/prod.service.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),

    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}