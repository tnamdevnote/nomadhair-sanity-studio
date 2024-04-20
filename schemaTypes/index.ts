import {appointmentType} from './appointmentType'
import {customerType} from './customerType'
import {durationType} from './duration/durationType'
import {timeValueType} from './duration/timeValueType'
import {stylistType} from './stylistType'
import {timeslotType} from './timeslotType'

export const schemaTypes = [
  appointmentType,
  customerType,
  stylistType,
  timeslotType,
  durationType,
  timeValueType,
]
