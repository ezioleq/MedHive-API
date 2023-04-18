import 'reflect-metadata'
import { DataSource } from 'typeorm'

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
      entities: [],
      migrations: [],
    })
  }

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
