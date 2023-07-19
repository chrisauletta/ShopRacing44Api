
import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { State } from './state.entity';
import { StatesService } from './state.service';

@Controller('state')
@ApiTags('state')
export class StatesController extends BaseController<State>{
    constructor(private readonly statesServices: StatesService){
        super(statesServices);
    }

}
