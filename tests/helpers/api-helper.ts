import { APIRequestContext } from '@playwright/test';

export class APIHelper {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string, headers?: Record<string, string>) {
    return await this.request.get(endpoint, { headers });
  }

 async post(endpoint: string, data: any) {
    return await this.request.post(endpoint, {
      data: data
    });
  }
}