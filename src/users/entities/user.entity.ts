import { Estado } from '../../estados/entities/estado.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reserva } from '../../reserva/entities/reserva.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  nascimento: Date;
  @Column()
  cpf: string;
  @Column()
  telefone: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column({ nullable: true })
  genero: string;

  @Column()
  cidade: string;
  @ManyToOne(() => Estado)
  @JoinColumn()
  estado: Estado;

  @OneToMany(() => Reserva, (reserva) => reserva.user)
  reservas: Reserva[];
}
