import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from './address'
import { AccountType } from './accountType'

/**
 * User account.
 */
@Entity()
export class Account {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Unique login.
   */
  @Column({ unique: true, length: 32 })
  public login!: string

  /**
   * Password hash.
   */
  @Column({ length: 4096 })
  public passwordHash!: string

  /**
   * Real name.
   */
  @Column({ length: 32 })
  public name!: string

  /**
   * Real surname.
   */
  @Column({ length: 64 })
  public surname!: string

  /**
   * Birthdate.
   */
  @Column({ type: 'date' })
  public birthdate!: Date

  /**
   * Sex. True for a woman. False for a man.
   */
  @Column({ nullable: false, default: false })
  public sex!: boolean

  /**
   * PESEL number.
   */
  @Column({ length: 11 })
  public pesel!: string

  /**
   * Residential address.
   */
  @OneToOne(() => Address)
  @JoinColumn()
  public address!: Address

  /**
   * Account type.
   */
  @Column({ type: 'simple-enum', default: AccountType.Patient })
  public type!: AccountType
}
