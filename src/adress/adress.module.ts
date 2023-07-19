import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './state.entity';
import { StatesController } from './state.controller';
import { StatesService } from './state.service';
import { City } from './city.entity';
import { CitiesController } from './city.controller';
import { CitiesService } from './city.service';
@Module({
    imports:[SequelizeModule.forFeature([State, City])],
    controllers:[StatesController, CitiesController],
    providers:[StatesService, CitiesService]
})

export class AdressModule {}