import { IService } from './service'

/**
 * Service provider.
 * Can be used to obtain access to desired registered services.
 */
class ServiceProvider {
  private _services: Set<IService> = new Set<IService>()

  /**
   * Register a new service.
   * @param service Service type to register.
   */
  public registerService(service: IService): void {
    service.initialize()

    this._services.add(service)
  }

  /**
   * Get service of type. If not found it will return a null.
   * @param type Service type.
   */
  public getService<T extends IService>(type: { new (): T }): T | null {
    let foundService = null

    this._services.forEach((service: IService): void => {
      if (service instanceof type) {
        foundService = service as T
      }
    })

    return foundService
  }

  /**
   * Get required service of type. If not found it will throw an error.
   * @param type Service type.
   */
  public getRequiredService<T extends IService>(type: { new (): T }): T {
    const service = this.getService<T>(type)

    if (service === null) {
      throw new Error(`Cannot get ${type.name} service`)
    }

    return service
  }
}

export { ServiceProvider }
