import express, { Express } from 'express'
import { DatabaseContext } from './dataSource'
import cors from 'cors'

/**
 * Application server class.
 */
class App {
  private _express: Express = express()
  private _dbContext: DatabaseContext = new DatabaseContext()

  /**
   * Setup application.
   */
  public setup(): void {
    this.setupDatabase()

    this._express.set('trust proxy', 1)
  }

  public useMiddlewares(): void {
    this._express.use(cors())
  }

  public registerControllers(): void {}

  /**
   * Start the server on the given port.
   * @param port Server listen port.
   */
  public listen(port: number): void {
    this._express.listen(port, () => {
      console.log(`Server is running on https://localhost:${port}/`)
    })
  }

  /**
   * Setup database connection.
   * @private
   */
  private setupDatabase(): void {
    this._dbContext.initialize()
  }
}

export { App }
