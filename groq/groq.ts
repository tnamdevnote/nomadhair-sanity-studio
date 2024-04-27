import groq from 'groq'

export const AVAILABLE_DATE_QUERY = groq`*[_type=='timeslot' 
  && reserved==false
 ]{
  'id': _id,
  date,
 }`

export const TIMESLOT_QUERY = groq`*[_type=='timeslot' 
  && reserved==false
  && date==''
 ]{
  'id': _id,
  date,
  'start': duration.start,
  reserved
 }`

export const IS_TIMESLOT_RESERVED_QUERY = groq`*[_type=='timeslot'
   && _id==''
 ]{
  reserved
 }`

export const APPOINTMENT_QUERY = groq`*[_type=='appointment'
  && customer->_id == ''
  && timeslot->date < now()
]{
  "id":_id,
  "date":timeslot->date,
  "time":timeslot->duration.start,
  address1,
  address2,
  city,
  state,
  zipCode,
  comment,
  customer->{"id": _id, firstName, lastName},
  stylist->{"id": _id, firstName, lastName}
}`
