import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ReservaDto } from './dto/reserva.dto';
import { ReservaService } from './reserva.service';

@ApiTags('Reserva')
@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova reserva' })
  @ApiCreatedResponse({ type: ReservaDto })
  create(@Body() reservaDto: CreateReservaDto) {
    return this.reservaService.create(reservaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as reservas' })
  @ApiOkResponse({ type: ReservaDto, isArray: true })
  findAll() {
    return this.reservaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma reserva por id' })
  @ApiOkResponse({ type: ReservaDto })
  findOne(@Param('id') id: string) {
    return this.reservaService.findOne(+id);
  }
}
