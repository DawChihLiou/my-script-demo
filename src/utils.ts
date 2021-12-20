import chalk from 'chalk';

/**
 * Coloring display value based on Lighthouse score.
 *
 * - 0 to 0.49 (red): Poor
 * - 0.5 to 0.89 (orange): Needs Improvement
 * - 0.9 to 1 (green): Good
 */
export function draw(score: number, value: number) {
  if (score >= 0.9 && score <= 1) {
    return chalk.green(`${value} (Good)`);
  }
  if (score >= 0.5 && score < 0.9) {
    return chalk.yellow(`${value} (Needs Improvement)`);
  }
  return chalk.red(`${value} (Poor)`);
}
