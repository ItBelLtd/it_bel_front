type method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface UseHttp {
  url: string;
  data: {
    method: method;
    body: BodyInit | null;
    headers: HeadersInit;
  };
}

export const useHttp = () => {
  const request = async ({ url, data: { method, body, headers } }: UseHttp) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        const errors = await response.json();
        return errors;
      }

      const data = await response.json();
      return data;
    } catch (e) {}
  };

  return {
    request,
  };
};
