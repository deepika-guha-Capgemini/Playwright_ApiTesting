import { test, expect } from "@playwright/test";
import { APIHelper } from "./helpers/api-helper";

test.describe('API Tests using Helper', () => {
  let apiHelper: APIHelper;

  test.beforeEach(async ({ request }) => {
    apiHelper = new APIHelper(request);
  });

  test("API GET request test", async () => {
    const headers = {
      'x-api-key': 'reqres-free-v1'
    };
    
    const getResponse = await apiHelper.get('https://reqres.in/api/users/2', headers);
    expect(getResponse.status()).toBe(200);

    const getResponseBody = await getResponse.json();
    console.log('Response Body:', JSON.stringify(getResponseBody, null, 2));
    expect(getResponseBody.data.first_name).toBe("Janet");
  });
});
