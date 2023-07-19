import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { PartDto } from './dto/part.dto';
import { Part } from './part.entity';
import { ImagePart } from '../ImagePart/imagePart.entity';
import { Customer } from '../customer/customer.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class PartsService extends BaseService<Part>{
    constructor(
        @InjectModel(Part)
        private readonly partsRepository: typeof Part,
    ){
        super(partsRepository);
    }

    async getByPk(id){
        return Part.findOne({
            include: [{
              model: ImagePart,
              required: true
            },{
                model:Customer,
                required:true
            }], 
            where: {
                'id': id
              }
          })
    }
    async getAllPaginated(body): Promise<Part[]> {
        var wherePart = {};
        if(body.title){
            wherePart['title'] = {[Op.like]: body.title};
        }
        if(body.value){
            wherePart['value'] = {[Op.like]: body.value};
        }
        var whereCustomer = {};
        if(body.city){
            whereCustomer['city'] = {[Op.like]: body.city};
        }
        if(body.state){
            whereCustomer['state'] = {[Op.like]: body.state};
        }
        console.log(wherePart);
        const offset = (body.page - 1) * body.limit;
        const limit = body.limit;
        return this.partsRepository.findAll({
            include: [{
              model: ImagePart,
              required: true,
              where: { main: 'S' }
            },{
                model:Customer,
                where: whereCustomer
            }],
            offset,
            limit,
            where: wherePart,
          })
    }
}
