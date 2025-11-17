import { test, expect } from "@playwright/test";

test('API GET request test', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2', {
    headers: {
      'Accept': 'application/json',
    },
  });
  expect(response.ok()).toBeTruthy();
});

test("API POST request test", async ({ request }) => {
  const postResponse = await request.post("https://reqres.in/api/users/2", {
    
    data: {
      name: "morpheus",
      job: "zion resident",
    },
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
  expect(postResponse.status()).toBe(201);

  const responseBody = await postResponse.json();
  console.log("Response Body:", JSON.stringify(responseBody));
});
test("API PATCH request test", async ({ request }) => {
  const patchResponse = await request.patch('https://reqres.in/api/users/2', {
    data: {
     "name": "morpheus",
     "job": "zion resident"
    },
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  });
  expect(patchResponse.status()).toBe(200);
  
  const responseBody = await patchResponse.json();
  console.log('PATCH Response Body:', JSON.stringify(responseBody));
});
