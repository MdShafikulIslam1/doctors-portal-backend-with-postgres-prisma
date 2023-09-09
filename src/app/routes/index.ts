/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { SpecializationRoutes } from '../modules/specializations/specialization.routes'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/specializations',
    route: SpecializationRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
