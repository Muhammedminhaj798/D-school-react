export function getGlobalEnrollCount({
  startTime,
  baseCount = 200,
  intervalMinutes = 1,
  maxCount = 1500,
  resetTo = 199,
}) {
  const start =
    startTime instanceof Date ? startTime.getTime() : startTime;

  const now = Date.now();
  if (now < start) return baseCount;

  const diffMinutes = Math.floor((now - start) / (1000 * 60));
  const increments = Math.floor(diffMinutes / intervalMinutes);

  const cycleLength = maxCount - resetTo; // 1500 - 199 = 1301

  const valueInCycle = increments % cycleLength;

  return resetTo + valueInCycle;
}
