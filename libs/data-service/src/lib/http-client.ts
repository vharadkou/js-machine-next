import { setDefaultResultOrder } from 'dns';

setDefaultResultOrder('ipv4first');

export const http = {
  get: async function <U>(
    path: string,
    params?: HttpRequestParams
  ): Promise<U | undefined> {
    return await httpBase<U>(path, {
      ...params,
      config: { method: 'get', ...params?.config },
    });
  },
  post: async function <T, U>(
    path: string,
    body?: T,
    params?: HttpRequestParams
  ): Promise<U | undefined> {
    return await httpBase<U>(path, {
      ...params,
      config: {
        method: 'post',
        body: JSON.stringify(body),
        ...params?.config,
      },
    });
  },
  put: async function <T, U>(
    path: string,
    body: T,
    params?: HttpRequestParams
  ): Promise<U | undefined> {
    return await httpBase<U>(path, {
      ...params,
      config: {
        method: 'put',
        body: JSON.stringify(body),
        ...params?.config,
      },
    });
  },
  delete: async function <T, U>(
    path: string,
    body?: T,
    params?: HttpRequestParams
  ): Promise<U | undefined> {
    return await httpBase<U>(path, {
      ...params,
      config: {
        method: 'delete',
        body: body ? JSON.stringify(body) : null,
        ...params?.config,
      },
    });
  },
};

interface HttpRequestParams {
  config?: RequestInit;
  ignoreResponse?: boolean;
}

async function httpBase<T>(
  path: string,
  params?: HttpRequestParams
): Promise<T | undefined> {
  const defaultConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const request = new Request(path, { ...defaultConfig, ...params?.config });
  console.log('@@@', request);
  const response = await fetch(request);

  if (!response.ok) {
    const body = await response.json();

    throw new CustomError({
      message: `Request ${path} has failed. Reason: ${response.status} - ${response.statusText}`,
      data: body,
      status: response.status,
    });
  }

  if (params?.ignoreResponse) {
    return;
  }

  return response.json().catch((err) => {
    console.error(
      `Unexpected error during processing of the request ${path}`,
      err
    );
  });
}

class CustomError<T = object> extends Error {
  data: T;
  status: number;

  constructor({
    message,
    data,
    status,
  }: {
    message: string;
    data: T;
    status: number;
  }) {
    super(message);
    this.status = status;
    this.data = data;
  }
}
