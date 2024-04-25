import {defineField, defineType} from 'sanity'

export const appointmentType = defineType({
  name: 'appointment',
  title: 'Appointment',
  type: 'document',
  fields: [
    defineField({
      name: 'timeslot',
      type: 'reference',
      to: [{type: 'timeslot'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stylist',
      type: 'reference',
      to: [{type: 'stylist'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customer',
      type: 'reference',
      to: [{type: 'customer'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zipCode',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'comment',
      type: 'text',
    }),
  ],
})
