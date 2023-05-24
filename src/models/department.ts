import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

/**
 * Single department.
 */
@Entity()
export class Department {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Name.
   */
  @Column({ nullable: false })
  public name!: string

  /**
   * Type.
   */
  @Column({ nullable: false })
  public type!: string
}
