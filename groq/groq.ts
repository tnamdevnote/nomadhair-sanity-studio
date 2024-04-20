import groq from 'groq'

export const TIMESLOT_QUERY = groq`*[_type == "timeSlot"]`

export const APPOINTMENT_QUERY = groq`*[_type=='appointment'
  && customer->_id == ''
  && dateTime(dateTime) > dateTime(now())
]{
  "id":_id,
  dateTime,
  address1,
  address2,
  city,
  state,
  zipCode,
  comment,
  customer->{"id": _id, firstName, lastName},
  stylist->{"id": _id, firstName, lastName}
}`
