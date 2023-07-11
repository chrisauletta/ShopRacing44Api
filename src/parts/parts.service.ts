import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { PartDto } from './dto/part.dto';
import { Part } from './part.entity';
import { ImagePart } from '../ImagePart/imagePart.entity';
import { Customer } from '../customer/customer.entity';

@Injectable()
export class PartsService extends BaseService<Part>{
    constructor(
        @Inject('PartsRepository')
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
    async getAll() {
        return Part.findAll({
            include: [{
              model: ImagePart,
              required: true,
              where: { main: 'S' }
            }]
          })
    }
}
