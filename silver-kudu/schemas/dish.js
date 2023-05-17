export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: ' name of the dish',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'short_description',
            title: 'short_description',
            type: 'string',
            validation:Rule=>Rule.max(200),
        },
        {
            name: 'price',
            title: 'price of the dish in Rupees',
            type: 'number',
        },
        {
            name: 'image',
            title: 'image of the dish',
            type: 'image',
        },
    ],
}