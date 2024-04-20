import {defineField, defineType} from 'sanity'

export const timeslotType = defineType({
  name: 'timeslot',
  title: 'Timeslot',
  type: 'document',
  fields: [
    defineField({
      name: 'dayOfWeek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      type: 'array',
      of: [{type: 'duration'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stylist',
      type: 'reference',
      to: [{type: 'stylist'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
