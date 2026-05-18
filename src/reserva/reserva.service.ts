import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly repository: Repository<Reserva>,
  ) {}

  create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    return this.repository.save(createReservaDto);
  }

  findAll(): Promise<Reserva[]> {
    return this.repository.find({ order: { id: 'DESC' } });
  }

  findOne(id: number): Promise<Reserva | null> {
    return this.repository.findOneBy({ id });
  }
}
