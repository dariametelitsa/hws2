import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string | null>>, setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name) {
        addUserCallback(name);
        setName('');
        setError(null);
        return;
    }
    setError('Name can\'t be empty');
    return;
}

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string | null>>) => { // если имя пустое - показать ошибку
    if(!name) {
        setError('Name can\'t be empty');
        return;
    }
    else setError(null);
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if(e.key === 'Enter') {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError(null);
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    }

    const onBlur = () => {
        pureOnBlur(name, setError);
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser);
    }

    const totalUsers = users.length // need to fix
    const lastUserName = totalUsers != 0 ? users[totalUsers - 1].name : 'unknown' // need to fix

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
