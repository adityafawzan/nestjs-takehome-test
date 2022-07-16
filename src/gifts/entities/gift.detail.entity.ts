import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GiftDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  giftDescription: string;

  @Column()
  giftDescription2: string;

  @Column()
  giftDescription3: string;
}
