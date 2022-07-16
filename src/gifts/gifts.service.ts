import { Gift } from './entities/gift.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class GiftsService {
  constructor(
    @InjectRepository(Gift)
    private giftRepository: Repository<Gift>,
    private dataSource: DataSource,
  ) {}

  async create(createGiftDto: CreateGiftDto) {
    const gitfName = createGiftDto.giftName;
    const giftRating = createGiftDto.giftRating;
    const isActive = createGiftDto.isActive;
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Gift)
      .values([
        { giftName: gitfName, giftRating: giftRating, isActive: isActive },
      ])
      .execute();
    // return 'This action adds a new gift';
  }

  async findAll() {
    const gifts = this.dataSource
      .getRepository(Gift)
      .createQueryBuilder('gifts')
      .getMany();

    return gifts;
  }

  findOne(id: number) {
    return `This action returns a #${id} gift`;
  }

  update(id: number, updateGiftDto: UpdateGiftDto) {
    return `This action updates a #${id} gift`;
  }

  remove(id: number) {
    return `This action removes a #${id} gift`;
  }
}
