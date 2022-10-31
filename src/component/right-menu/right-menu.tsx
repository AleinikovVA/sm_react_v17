import React, { useEffect, useState, useMemo } from "react";
import './right-menu.css';
import { emp } from '../../data/emp';
import { IEmp } from "../../modeles";
import { element } from "prop-types";

export function RightMenu() {

    const [message, setMessage] = useState('');

    const [list, setList] = useState(emp);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    let emptyName = true;

    function handleRemove(id:number) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
      }

    emp.map((value: IEmp, key: number) => {
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
                {list.map((value: IEmp, key: number) => (
                    <div key={value.id}>
                        {value.name.toUpperCase().includes(message.toUpperCase()) === true ?
                            <><li key={value.id} >{value.name} <a className="close" onClick={() => handleRemove(value.id)}>x</a></li>
                            
                            </>
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