import { Entity, PrimaryGeneratedColumn } from 'typeorm'

/**
 * Residential address.
 */
@Entity()
export class Address {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * City.
   */
  public city!: string

  /**
   * Street and home number.
   */
  public street!: string

  /**
   * Postal code.
   */
  public postalCode!: string
}
