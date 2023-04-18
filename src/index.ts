import { App } from './app'

const app: App = new App()

app.setup()

app.useMiddlewares()
app.registerControllers()

app.listen(parseInt(process.env.MEDHIVE_PORT ?? '3000'))
