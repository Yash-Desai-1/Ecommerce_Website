import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId :'02kpgx18',
    dataset:'production',
    apiVersion:`2023-01-13`,
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,

})
const builder = imageUrlBuilder(client);
// 2022-03-10
export const urlFor =(source)=>builder.image(source);