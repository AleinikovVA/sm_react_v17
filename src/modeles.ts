
export interface ILeagues {
    id: number
    title: string
    info: string
    leagueType: string
    roles: {[key: string]: any}
}

export interface IEmp {
    id: number
    name: string
}