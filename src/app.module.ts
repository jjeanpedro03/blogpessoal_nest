import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity.js';
import { PostagemModule } from './postagem/postagem.module.js';
import { TemaModule } from './tema/tema.module.js';
import { Tema } from './tema/entities/tema.entity.js';
import { Usuario } from './usuario/entities/usuario.entity.js'; 
import { AuthModule } from './auth/auth.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'JJpss2003$$&',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
