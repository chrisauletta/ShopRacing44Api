
import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { State } from './state.entity';
import { City } from './city.entity';
import { CitiesService } from './city.service';

@Controller('city')
@ApiTags('city')
export class CitiesController extends BaseController<City>{
    constructor(private readonly citiesServices: CitiesService){
        super(citiesServices);
    }

}
