import { BaseController } from './baseController'
import { Request, Response, Router } from 'express'
import { ServiceProvider } from '../services/serviceProvider'

/**
 * Helper controller.
 */
class HelperController extends BaseController {
  constructor(serviceProvider: ServiceProvider) {
    super(serviceProvider)
  }

  public override setup(): Router {
    this.router.get('/health', this.health)

    return this.router
  }

  /**
   * Return OK status.
   * @param req Request.
   * @param res Response.
   * @private
   */
  private health(req: Request, res: Response) {
    res.sendStatus(200)
  }
}

export { HelperController }
