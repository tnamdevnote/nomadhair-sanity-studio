import {defineField, defineType} from 'sanity'

export const appointmentType = defineType({
  name: 'appointment',
  title: 'Appointment',
  type: 'document',
  fields: [
    defineField({
      name: 'dateTime',
      type: 'datetime',
    }),
    defineField({
      name: 'timeslot',
      type: 'reference',
      to: [{type: 'timeslot'}],
    }),
    defineField({
      name: 'stylist',
      type: 'reference',
      to: [{type: 'stylist'}],
    }),
    defineField({
      name: 'customer',
      type: 'reference',
      to: [{type: 'customer'}],
    }),
    defineField({
      name: 'address1',
      type: 'string',
    }),
    defineField({
      name: 'address2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
    defineField({
      name: 'state',
      type: 'string',
    }),
    defineField({
      name: 'zipCode',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      type: 'text',
    }),
  ],
})
