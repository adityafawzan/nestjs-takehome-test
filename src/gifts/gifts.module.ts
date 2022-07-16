import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftsService } from './gifts.service';
import { GiftsController } from './gifts.controller';
import { GiftDetail } from './entities/gift.detail.entity';
import { Gift } from './entities/gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gift, GiftDetail])],
  controllers: [GiftsController],
  providers: [GiftsService],
})
export class GiftsModule {}
