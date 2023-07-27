import React, {ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import {Simulate} from "react-dom/test-utils";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: Function, setName: Function, addUserCallback: (name:string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    setError('')
    if(name.trim() !== '') {
        addUserCallback(name)
        setName('')

    }
    else {
        setError('Ошибка! Введите имя!')

    }
}

export const pureOnBlur = (name: string, setError: Function) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')

    }

    // если имя пустое - показать ошибку
}

export const pureOnEnter = ( e: KeyboardEvent<HTMLInputElement> ,addUser: Function) => {
    if (e.key === 'Enter') {
        addUser();
    }

    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState('') // need to fix any
    const [error, setError] = useState<string|''>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setError('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)

    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)

    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length-1].name : users



    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
