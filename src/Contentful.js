import {createClient} from 'contenful'

export default createClient({
    space: process.env.REACT_APP_API_Space,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});


// This component is not in use as I have skipped Contentful