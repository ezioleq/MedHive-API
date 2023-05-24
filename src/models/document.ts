import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Patient } from './patient'

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

  /**
   * Patient.
   */
  @ManyToOne(() => Patient, (patient: Patient) => patient.documents)
  public patient!: Patient
}
