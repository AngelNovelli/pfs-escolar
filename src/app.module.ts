import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';

@Module({
  imports: [
  TypeOrmModule.forRoot( {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "Colo123",
  "database": "escolar",
  "entities": [
  "dist/**/**.entity{.ts,.js}"
  ],
  "synchronize": false
                } ),
                    CiudadModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
