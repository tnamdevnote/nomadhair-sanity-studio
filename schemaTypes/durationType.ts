import {defineField, defineType} from 'sanity'

/** Time duration object created
 * @link https://www.sanity.io/guides/create-a-time-duration-object-field
 */
export const durationType = defineType({
  name: 'duration',
  title: 'Duration',
  description: 'A start and end time for an appointment',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      type: 'timeValue',
    }),
    defineField({
      name: 'end',
      type: 'timeValue',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
})
