export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'video',
            title: 'Video URL',
            type: 'string'
        },
        {
            name: 'videoTitle',
            title: 'Video Title (you won\'t see this, needed for the code)',
            type: 'string'
        },
        {
            name: 'contactNumber',
            title: 'Contact Phone Number',
            type: 'string'
        }
    ],
    
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection) {
            return {
                title: 'Home'
            }
        }
    }
}