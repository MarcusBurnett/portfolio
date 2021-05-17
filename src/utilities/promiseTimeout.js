export default async () => {
  const res = await new Promise((resolve) => {
    setTimeout(() => resolve('timed out'), 10000);
  });

  return res;
};
