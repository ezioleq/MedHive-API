import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Account } from './models/account'
import { Document } from './models/document'
import { Address } from './models/address'
import { Condition } from './models/condition'
import { Department } from './models/department'
import { Appointment } from './models/appointment'
import { Patient } from './models/patient'
import { Staff } from './models/staff'

/**
 * Database context.
 */
class DatabaseContext {
  readonly _dataSource: DataSource

  get dataSource(): DataSource {
    return this._dataSource
  }

  public constructor() {
    this._dataSource = new DataSource({
      type: 'sqlite',
      database: 'medhive.sqlite',
      synchronize: true,
      entities: [Account, Document, Address, Condition, Department, Appointment, Patient, Staff],
      migrations: [],
    })
  }

  /**
   * Initialize the database connection.
   */
  public initialize(): void {
    console.debug('Initializing database connection...')
    this._dataSource
      .initialize()
      .then(() => {
        console.log('Successfully connected to the database')
      })
      .catch((error) => {
        console.error('Failed to connect to the database', error)
      })
  }
}

export { DatabaseContext }
