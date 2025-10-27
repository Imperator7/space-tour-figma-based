export type LinkObject = {
  name: string
  href: string
}

export const links: LinkObject[] = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'destination',
    href: '/destination',
  },
  {
    name: 'crew',
    href: '/crew',
  },
  {
    name: 'technology',
    href: '/technology',
  },
] as const
