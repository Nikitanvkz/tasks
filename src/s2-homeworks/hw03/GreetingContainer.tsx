import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

type GreetingPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback:(name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any  , setName: any, addUserCallback: any) => {

    if(name.trim() !== '') {
        addUserCallback(name.trim())
        setName('')
    }
    else {
        setError('Ошибка! Введите имя!')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: any) => {
    if(name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => {

    if(e.key === 'Enter') {
        addUser();
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
 function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
//     users,
//     addUserCallback,
// }) =>
// {
    // деструктуризация пропсов
    const [name, setName] = useState('') // need to fix any
    const [error, setError] = useState<string|null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(name) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, props.addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = props.users.length // need to fix
    const lastUserName = name.trim() // need to fix

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
