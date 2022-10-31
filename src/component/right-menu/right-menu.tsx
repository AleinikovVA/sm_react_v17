import React, { useState } from "react";
import './right-menu.css';
import { IEmp } from "../../modeles";
import { connect } from 'react-redux';
import { addEmp, delEmp } from '../../actions'


const RightMenu: React.FC<IStateProps & IDispatchProps> = (props) => {
    const { emp } = props
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
                            <li key={value.id} >{value.name} <a className="close" onClick={() => props.delEmp(value)}>x</a></li>
                            :
                            null
                        }
                    </div>
                ))}
                {emptyName === true && message &&
                    <>
                        {console.log(message)}
                        <b>Ничего не найдено</b>
                        <button onClick={() => props.addEmp({})}>Добавить</button>
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