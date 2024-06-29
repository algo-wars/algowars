import { Tag } from '../entities/tag.entity';

export class ProblemDto {
  readonly id: string;
  readonly title: string;
  readonly question: string;
  readonly slug: string;
  readonly rating: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly tags: Tag[];
}
