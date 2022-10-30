import React, { useEffect, useState, useMemo } from "react";
import './right-menu.css';
import { emp } from '../../data/emp';
import { IEmp } from "../../modeles";
import { element } from "prop-types";

export function RightMenu() {
    const [message, setMessage] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };
    let emptyName = true;
    let names: any = [];
    emp.map((value: IEmp, key: number) => {
        if (value.name.includes(message) === true) {
            emptyName = false;
        }
        names.push(<li key={key}>{value.name}</li>);
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
                {emp.map((value: IEmp, key: number) => (
                    <div key={key}>
                        {value.name.toUpperCase().includes(message.toUpperCase()) === true ?
                            <li key={key}>{value.name}</li>
                            :
                            null
                        }
                    </div>
                ))}
                {emptyName === true && message &&
                    <b>Ничего не найдено</b>
                }
            </ul>
        </div>
    )
}