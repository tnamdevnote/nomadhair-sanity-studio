import {defineField, defineType} from 'sanity'

export const timeslotType = defineType({
  name: 'timeslot',
  title: 'Timeslot',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      type: 'duration',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reserved',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
