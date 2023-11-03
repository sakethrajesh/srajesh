"use server";

import { Client } from "@notionhq/client";

const client = new Client({
  auth: "secret_ivxuO3V83nvM93ydwMLUSj3f0B1Xz0tFpgMBWq9c8YM",
});

export async function GetPosts() {
  const response = await client.databases.query({
    database_id: "7c0675dbc6c046b9b5b175094ebb246d",
    filter: {
      property: "Publish",
      checkbox: {
        equals: true,
      },
    },
  });
  //  console.log(myPosts)
  return response;
}

export async function getBlocks(id) {
  const notionApiKey = "secret_ivxuO3V83nvM93ydwMLUSj3f0B1Xz0tFpgMBWq9c8YM";

  const url = `https://api.notion.com/v1/blocks/${id}/children?page_size=20`;
  var t = "";
  const rsp = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${notionApiKey}`,
      "Notion-Version": "2022-06-28",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      t = data;
    })
    .catch((err) => {
      console.error("Error:", err);
    });

  return t;
}

export async function getPage(id) {
  const myPost = await client.pages.retrieve({
    page_id: id,
  });

  return myPost;
}
