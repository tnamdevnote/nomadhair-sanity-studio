import {defineField, defineType} from 'sanity'

export const stylistType = defineType({
  name: 'stylist',
  title: 'Stylist',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: 'image',
      type: 'string',
    }),
  ],
})
