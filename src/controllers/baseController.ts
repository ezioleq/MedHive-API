import express, { Router } from 'express'

/**
 * Controller base class.
 */
abstract class BaseController {
  protected router: Router = express.Router()

  /**
   * Setup controller routes.
   */
  public abstract setup(): Router
}

export { BaseController }
