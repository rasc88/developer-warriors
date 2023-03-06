export function generateRandom(excludeNumber: number, max: number): number {
  const result = Math.floor(Math.random() * max);

  return (result === excludeNumber) ? generateRandom(excludeNumber, max) : result;
}