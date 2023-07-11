import { ApiProperty } from '@nestjs/swagger';
import { Part } from '../part.entity';

export class PartDto {

    @ApiProperty()
    readonly customerId:string
    
    @ApiProperty()
    readonly title:string

    @ApiProperty()
    readonly note:string

    @ApiProperty()
    readonly value:string

    @ApiProperty()
    readonly status:string
 
    constructor(part: Part) {
        this.customerId = part.customerId,
        this.title = part.title,
        this.note = part.note,
        this.value = part.value,
        this.status = part.status
    }
}
