interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fniodusnfosdbfousdibfousbdofiusdhnfiosdnfin',
        user: {
          name: 'matheus cleber',
          email: 'matheus@gmail.com',
        },
      });
    }, 2000);
  });
}
