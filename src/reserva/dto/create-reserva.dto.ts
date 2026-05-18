import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString, Min } from 'class-validator';

export class CreateReservaDto {
  @ApiProperty()
  @IsString()
  destino: string;

  @ApiProperty({ example: '2025-09-23' })
  @IsDateString()
  dataIda: string;

  @ApiProperty({ example: '2025-09-30' })
  @IsDateString()
  dataVolta: string;

  @ApiProperty()
  @IsString()
  origem: string;

  @ApiProperty()
  @IsString()
  estadoOrigem: string;

  @ApiProperty({ example: 3 })
  @IsNumber()
  @Min(1)
  adultos: number;

  @ApiProperty({ example: 3769 })
  @IsNumber()
  @Min(0)
  valorTotal: number;
}
