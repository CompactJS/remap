/**
 * Maps a value from one range to another
 */
export function remap(
  value: number,
  min: number,
  max: number,
  targetMin: number,
  targetMax: number
): number {
  return targetMin + ((value - min) / (max - min)) * (targetMax - targetMin);
}
