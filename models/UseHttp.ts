type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface UseHttp {
  url: string;
  data: {
    method?: method;
    body?: BodyInit | null;
    headers?: HeadersInit;
  };
}
