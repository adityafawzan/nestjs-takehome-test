import { GiftDetail } from './gift.detail.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  giftName: string;

  @Column('decimal', { precision: 20, scale: 2 })
  giftRating: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => GiftDetail)
  @JoinColumn()
  giftDetail: GiftDetail;
}
