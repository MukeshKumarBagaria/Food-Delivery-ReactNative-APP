// schemas/restaurant.js
export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Restaurant'
        },
        {
            name: 'lat',
            type: 'number',
            title:'Latitude of the Restaurant'
        },
        {
            name: 'long',
            type: 'number',
            title:'Long of the Restaurant'
        },
        {
            name:'address',
            type:'string',
            title:"Restaurant Address",
            validation: Rule => Rule.required(),
        },
        {
            name:'rating',
            type:'number',
            title:'Enter a Rating from (1-5 star)',
          validation: Rule => 
            Rule.required()
                .min(1)
                .max(5)
                .error('Please enter rating between 1 to 5 only'),
           
        },
        {
            name: 'type',
            title: 'category',
            type: 'reference',
            to: [{ type: 'category' }],
        },
        {
            name: 'dishes',
            title: 'Dishes',
            type: 'array',
            of: [{ type: 'reference' , to:[{type:'dish'}]}],
        },
        
    ]
}