'use server'

import {Client} from '@notionhq/client';

const client = new Client({
    auth: 'secret_ivxuO3V83nvM93ydwMLUSj3f0B1Xz0tFpgMBWq9c8YM',
 });

 export async function posts() {
      const response = await client.databases.query({ 
         database_id: '7c0675dbc6c046b9b5b175094ebb246d',
         filter : {
            "property": "Publish",
            "checkbox": {
               "equals": true
            }
         }
      });
   //  console.log(myPosts)
      return response;
 }

 export async function blocks(id) {

    const response = await client.blocks.children.list({
      block_id: id,
    });

    return response;
 }

 export async function page(id) {
    const myPost = await client.pages.retrieve({
      page_id: id,
    });

    return myPost

 }

