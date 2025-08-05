export const routeePath = {
    BLIND_MATCH: '/blind-match',
    BOOTH: '/booth',
    FALLBACK: '*',
    HOME: '/home',
    LAND: '/land',
    LOGIN: '/login',
    LOST_ITEMS: '/lost-items',
    TICKET: '/ticket',
} as const

export type Routes = (typeof routeePath)[keyof typeof routeePath];