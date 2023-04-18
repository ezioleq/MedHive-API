import express, { Router } from 'express'

abstract class BaseController {
  protected router: Router = express.Router()

  public abstract setup(): Router
}

export { BaseController }
