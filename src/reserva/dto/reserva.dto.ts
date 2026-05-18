import { ApiProperty } from '@nestjs/swagger';
import { CreateReservaDto } from './create-reserva.dto';

export class ReservaDto extends CreateReservaDto {
  @ApiProperty()
  id: number;
}
