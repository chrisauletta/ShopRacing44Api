import { Injectable, Inject, BadGatewayException, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { Helper } from '../helper/helper';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';
import { FilterDto } from 'src/helper/filter.dto';

@Injectable()
export class BaseService<T> {
	constructor(private readonly genericRepository) {}

  helper = new Helper();

  async getAll() {
    return this.genericRepository.findAll();
  }

  async getByPk(id: number) {
      return this.genericRepository.findAll({
        where: {
          'id': id
        }
      });
  }

  async findByParameter(parameter: FilterDto) {
    var filterParameter = this.helper.managerFilter(parameter.column, parameter.value, parameter.table);
    var whereAux = [];
    var query = {};
    if(parameter.search == 'true'){
      whereAux.push(filterParameter);
    //  query["limit"] = 2;
    }
    query["where"] = whereAux;
    return await this.genericRepository.findAll(query);
  }

  async create(entity: any){
      entity.usuincDt = new Date();
      return await this.genericRepository.create(entity).
      then((created) => {
        return created;
      });
  }

  async update(entity: any): Promise<T> {
    return this.genericRepository.update(entity, {
        where:{
            id: entity.id
        }
    });
  }

  async delete(id: number){
     const entity = await this.genericRepository.findByPk(id);
     entity.destroy();
  }
}