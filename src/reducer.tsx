import { leagues } from './data/leagues';

const data = [
    {"id": 1, "name": "Ларионов Аввакум Игоревич"},
    {"id": 2, "name": "Прохоров Олег Альвианович"},
    {"id": 3, "name": "Беляев Казимир Кириллович"},
    {"id": 4, "name": "Хохлов Ростислав Фролович"},
    {"id": 5, "name": "Фомин Юстиниан Тарасович"},
    {"id": 6, "name": "Елисеев Демьян Якунович"},
    {"id": 7, "name": "Кудрявцев Пантелей Романович"},
    {"id": 8, "name": "Соболев Аркадий Александрович"},
    {"id": 9, "name": "Дмитриев Герман Антонинович"},
]

const initialState: IState = {
    leagues: leagues,
    emps: data
}

export interface IState{
    leagues: any;
    emps: Array<{
        id:number;
        name:string
    }>;
}

const reducer:any = (state = initialState, action:any) => {
    switch(action.type){

        case 'ADD_EMP':
            const ret = {...state, emps:[...state.emps].push(action.payload)}
            state.emps.push(action.payload)
            console.log(state)
            return state

        case 'DEL_EMP':
            return {...state, emps:[...state.emps].filter((el) => el !== action.payload)}
            
        default:
            return initialState;
    }
}
export default reducer;