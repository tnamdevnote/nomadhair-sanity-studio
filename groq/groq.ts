import groq from 'groq'

/**
 * Find available dates on a given date that
 * are not referenced in Appointment document.
 */
// export const AVAILABLE_DATE_QUERY = groq`*[_type=='timeslot'
//   && !(_id in *[_type=='appointment'].timeslot._ref)
//   && date >= now()
// ]{
//   "id": _id,
//   date,
// }`

/**
 * Find available timeslots on a given date that
 * are not referenced in Appointment document.
 */
export const AVAILABLE_TIMESLOT_QUERY = groq`*[_type=='timeslot'
 && !(_id in *[_type=='appointment'].timeslot._ref)
 && date == '' 
 && dateTime(time) >= dateTime(now())
]{
  "id": _id,
  date,
  time,
}`

export const IS_TIMESLOT_RESERVED_QUERY = groq`count(*[_type=='appointment' 
  && references('')
 ]) > 0`

export const APPOINTMENT_QUERY = groq`*[_type=='appointment'
  && customer->_id == ''
  && dateTime(timeslot->time) >= dateTime(now())
]{
  "id":_id,
  "timeslotId":timeslot->_id,
  "date":timeslot->date,
  "time":timeslot->time,
  address1,
  address2,
  city,
  state,
  zipCode,
  comment,
  customer->{"id": _id, firstName, lastName},
  stylist->{"id": _id, firstName, lastName}
}`
