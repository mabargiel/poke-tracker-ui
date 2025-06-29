export const breakpoints = {
  mobile: 600,
  tablet: 768,
  desktop: 1024,
}

export type Breakpoint = keyof typeof breakpoints

export const media = {
  up: (bp: Breakpoint) => `@media (min-width: ${breakpoints[bp]}px)`,
  down: (bp: Breakpoint) => `@media (max-width: ${breakpoints[bp] - 1}px)`,
  between: (min: Breakpoint, max: Breakpoint) =>
    `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max] - 1}px)`,
}
