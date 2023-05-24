import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Department } from './department'
import { Condition } from './condition'
import { Document } from './document'

/**
 * Patient account details.
 */
@Entity()
export class Patient {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Room number.
   */
  @Column()
  public roomNumber!: number

  /**
   * Condition.
   */
  @ManyToOne(() => Condition, (condition: Condition) => condition.patient)
  public condition!: Condition

  public appointment!: any

  /**
   * Patient's documents.
   */
  @OneToMany(() => Document, (document: Document) => document.patient)
  public documents!: Document[]
}
