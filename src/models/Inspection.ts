export type InspectionStatus = 'completed' | 'inProgress' | 'cancelled'

export interface Inspection {
  id: number
  propertyAddress: string
  inspectorName: string
  inspectionDate: string // YYYY-MM-DD
  status: InspectionStatus
  notes: string
}