import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './state.entity';

@Injectable()
export class StatesService extends BaseService<State>{
    constructor(
        @InjectModel(State)
        private readonly statesRepository: typeof State,
    ){
        super(statesRepository);
    }


}
