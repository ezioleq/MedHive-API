import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

/**
 * User's single document representation.
 */
@Entity()
export class Document {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Resource URL to download from.
   */
  @Column({ nullable: false })
  public resourceUrl!: string
}
