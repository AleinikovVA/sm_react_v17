import React, { useState } from "react";
import './right-menu.css';
import { IEmp } from "../../modeles";
import { connect, useSelector, useDispatch } from 'react-redux';
import { addEmp, delEmp } from '../../actions'
import { IState } from '../../reducer';

const RightMenu: React.FC<IStateProps & IDispatchProps> = (props) => {

    const emp = useSelector<IState, any>((state => state.emps));
    const dispatch = useDispatch();
    const [newUserElement, setNewUserElement] = useState([]);
    const [message, setMessage] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };
    let emptyName = true;

    emp.map((value: IEmp) => {
        if (value.name.toUpperCase().includes(message.toUpperCase()) === true) {
            emptyName = false;
        }
    })

    const newElement:any = (nextId:number,newUser:object) => {
        return <li key={nextId} >{message} <a className="close" onClick={() => dispatch(delEmp(newUser))}>x</a></li>;
      };

    const addEmpWithButton = (message: string) => {
        const nextId = Math.max(...emp.map((o: any) => o.id)) + 1;
        const newUser = {
            'id': nextId,
            'name': message
        }
        dispatch(addEmp(newUser));
        
        setNewUserElement(newElement(nextId, newUser));
    }
    return (
        <div className="right-menu item">
            <h3>Подчиненые</h3>
            <input
                className="input-grey-rounded"
                onChange={handleChange}
                type="text"
                placeholder="Введите имя" />
            <ul>
                {emp.map((value: IEmp) => (
                    <div key={value.id}>
                        {value.name.toUpperCase().includes(message.toUpperCase()) === true ?
                            <li key={value.id} >{value.name} <a className="close" onClick={() => dispatch(delEmp(value))}>x</a></li>
                            :
                            null
                        }
                    </div>
                ))}
                {emptyName === true && message &&
                    <>
                        {console.log(message)}
                        <b>Ничего не найдено</b>
                        <button onClick={() => addEmpWithButton(message)}>Добавить</button>
                        {newUserElement}
                    </>
                }
            </ul>
        </div>
    )
}

interface IStateProps {
    emp: []
}

interface IDispatchProps {
    delEmp(ob: object): void,
    addEmp(ob: object): void
}

const mapStateToProps = (state: any) => {
    return {
        emp: state.emps
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        delEmp: (ob: object) => {
            dispatch(delEmp(ob))
        },
        addEmp: (ob: object) => {
            dispatch(addEmp(ob))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RightMenu);

// дубль с useSelector, useDespatch
//+ типизация
// useSelector a - вся инфа тут
// redux + hooks