import { UseHttp } from '@/models/UseHttp';

export const useHttp = () => {
  const request = async ({
    url,
    data: {
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' },
    },
  }: UseHttp) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        const errors = await response.json();
        return errors;
      } else if (response.status !== 204) {
        const data = await response.json();
        return data;
      }
    } finally {
    }
  };

  return {
    request,
  };
};
