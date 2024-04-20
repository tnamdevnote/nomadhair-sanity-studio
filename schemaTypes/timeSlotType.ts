import {defineField, defineType} from 'sanity'

export const timeSlotType = defineType({
  name: 'timeSlot',
  title: 'TimeSlot',
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
