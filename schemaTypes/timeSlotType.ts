import {defineField, defineType} from 'sanity'

export const timeslotType = defineType({
  name: 'timeslot',
  type: 'document',
  fields: [
    defineField({
      name: 'time',
      type: 'datetime',
      options: {
        timeStep: 30,
      },
    }),
    defineField({
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'duration',
    //   type: 'duration',
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: 'reserved',
    //   type: 'boolean',
    //   initialValue: false,
    //   validation: (Rule) => Rule.required(),
    // }),
  ],
})
