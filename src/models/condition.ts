import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Patient } from './patient'

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

  /**
   * Patient.
   */
  @OneToMany(() => Patient, (patient: Patient) => patient.condition)
  public patient!: Patient
}
