import { DataSource } from 'typeorm';
import { Reserva } from './entities/reserva.entity';

export async function seedReserva(dataSource: DataSource) {
  const repository = dataSource.getRepository(Reserva);

  const reservaData = {
    destino: 'Chile',
    dataIda: '2025-09-23',
    dataVolta: '2025-09-30',
    origem: 'Rio Branco',
    estadoOrigem: 'Acre',
    adultos: 3,
    valorTotal: 3769,
  };

  const reservaExists = await repository.findOneBy({ destino: 'Chile' });

  if (!reservaExists) {
    const reserva = repository.create(reservaData);
    await repository.save(reserva);
    console.log('Reserva seed adicionada com sucesso');
  }
}
