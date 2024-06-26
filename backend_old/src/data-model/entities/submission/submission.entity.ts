import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Player } from '../player/player.entity';
import { Problem } from '../problem/problem.entity';
import { SubmissionToken } from './submission-token.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(
    () => SubmissionToken,
    (submissionToken) => submissionToken.submission,
    {
      cascade: true,
    },
  )
  tokens: SubmissionToken[];

  @Column({ nullable: false })
  code: string;

  @ManyToOne(() => Player, (player) => player.submissions)
  createdBy: Player;

  @Column({ nullable: false })
  languageId: number;

  @ManyToOne(() => Problem, (problem) => problem.submissions)
  problem: Problem;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  public getTokens(): string[] {
    return this.tokens.map((token) => token.token);
  }
}
