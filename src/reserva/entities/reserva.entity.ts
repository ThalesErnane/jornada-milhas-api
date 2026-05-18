import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destino: string;

  @Column()
  dataIda: string;

  @Column()
  dataVolta: string;

  @Column()
  origem: string;

  @Column()
  estadoOrigem: string;

  @Column('int')
  adultos: number;

  @Column('float')
  valorTotal: number;

  @ManyToOne(() => User, (user) => user.reservas, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  user: User;
}
