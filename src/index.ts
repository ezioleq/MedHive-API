import 'reflect-metadata'

import express from 'express'
import { AppDataSource } from './dataSource'

AppDataSource.initialize()
  .then(() => {
    console.log('Connected to the database successfully')
  })
  .catch((err) => console.log(err))

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(3000)
