import { Specialization } from '@prisma/client'
import { prisma } from '../../../shared/prisma'

const createSpecialization = async (
  data: Specialization,
): Promise<Specialization> => {
  const result = await prisma.specialization.create({
    data,
  })
  return result
}
const getAllSpecialization = async (): Promise<Specialization[]> => {
  const result = await prisma.specialization.findMany({})
  return result
}
const getSingleSpecialization = async (
  id: string,
): Promise<Specialization | null> => {
  const result = await prisma.specialization.findUnique({
    where: {
      id,
    },
  })
  return result
}
export const SpecializationService = {
  createSpecialization,
  getAllSpecialization,
  getSingleSpecialization,
}
