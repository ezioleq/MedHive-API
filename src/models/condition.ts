import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

/**
 * Patient's condition.
 */
@Entity()
export class Condition {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Condition name.
   */
  @Column({ nullable: false })
  public name!: string
}
