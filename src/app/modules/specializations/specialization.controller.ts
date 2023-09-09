import { Request, Response } from 'express'
import { SpecializationService } from './specialization.service'

const createSpecialization = async (req: Request, res: Response) => {
  try {
    const result = await SpecializationService.createSpecialization(req.body)
    res.status(200).json({
      success: true,
      message: 'successfully create specialization',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    })
  }
}
const getAllSpecialization = async (req: Request, res: Response) => {
  try {
    const result = await SpecializationService.getAllSpecialization()
    res.status(200).json({
      success: true,
      message: 'successfully retrieve all specialization data',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    })
  }
}
const getSingleSpecialization = async (req: Request, res: Response) => {
  try {
    const result = await SpecializationService.getSingleSpecialization(
      req.params.id,
    )
    res.status(200).json({
      success: true,
      message: 'successfully retrieve Single specialization data',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
      error,
    })
  }
}
export const SpecializationController = {
  createSpecialization,
  getAllSpecialization,
  getSingleSpecialization,
}
