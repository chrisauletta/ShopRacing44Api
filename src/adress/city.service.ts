import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './state.entity';
import { City } from './city.entity';

@Injectable()
export class CitiesService extends BaseService<City>{
    constructor(
        @InjectModel(City)
        private readonly citiesRepository: typeof City,
    ){
        super(citiesRepository);
    }


}
