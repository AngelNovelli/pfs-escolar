import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class CiudadService {

  constructor(@InjectRepository(Ciudad) 
  private readonly ciudadRepository : Repository<Ciudad>) {}

  public async getById(id: number): Promise<Ciudad> {
    let criterio : FindOneOptions<Ciudad>= {where:{idCiudad: id}}
    let ciudad = await this.ciudadRepository.findOne(criterio);

    if(!ciudad) {
      throw new NotFoundException(`No se encontró la ciudad con id ${id}`);
    }

    return ciudad;
  }

  create(createCiudadDto: CreateCiudadDto) {
    return 'This action adds a new ciudad';
  }

  findAll() {
    return `This action returns all ciudad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, updateCiudadDto: UpdateCiudadDto) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}
