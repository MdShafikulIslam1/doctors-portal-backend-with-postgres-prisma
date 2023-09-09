import express from 'express'
import { SpecializationController } from './specialization.controller'
const router = express.Router()
router.post(
  '/create-specialization',
  SpecializationController.createSpecialization,
)
router.get('/', SpecializationController.getAllSpecialization)
router.get('/:id', SpecializationController.getSingleSpecialization)

export const SpecializationRoutes = router
