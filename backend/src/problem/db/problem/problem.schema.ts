import { PageableEntitySchema } from 'src/common/pagination/db/pageable-entity.schema';
import { IdentifiableEntitySchema } from 'src/db/identifiable-entity.schema';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ProblemSetupSchema } from '../problem-setup/problem-setup.schema';
import { TestSchema } from '../test/test.schema';
import { TagSchema } from '../tag/tag.schema';

@Entity({ name: 'problem' })
export class ProblemSchema
  extends IdentifiableEntitySchema
  implements PageableEntitySchema
{
  @Column({ nullable: false, length: 100 })
  readonly title: string;

  @Column({ nullable: false, type: 'text' })
  readonly question: string;

  @Column({ nullable: false, length: 110, unique: true })
  readonly slug: string;

  @Column({ nullable: true })
  readonly rating: number;

  @OneToMany(() => ProblemSetupSchema, (setup) => setup.problem, {
    cascade: true,
  })
  readonly setups?: ProblemSetupSchema[];

  @OneToMany(() => TestSchema, (test) => test.problem, {
    cascade: true,
  })
  readonly tests?: TestSchema[];

  @ManyToMany(() => TagSchema, { nullable: false })
  @JoinTable({ name: 'problem_tags' })
  readonly tags: TagSchema[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  readonly updatedAt: Date;
}
