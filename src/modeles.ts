
export interface ILeagues {
    id: number
    title: string
    info: string
    leagueType: string
    roles: {
        id?: number
        title: string
        data: number
    }
}
