import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'


export const inputs = [
    {
        name: 'username',
        id: 'username',
        placeholder: 'username',
        type: 'text',
        icon: <AiOutlineUser />
    },
    {
        name: 'email',
        id: 'email',
        placeholder: 'Email',
        type: 'email',
        icon: <AiOutlineMail />
    },
    {
        name: 'password',
        id: 'password',
        placeholder: 'Password',
        type: 'password',
        icon: <AiOutlineLock />
    },
    {
        name: 'password_confirmation',
        id: 'password_confirmation',
        placeholder: 'Confirm Password',
        type: 'password',
        icon: <AiOutlineLock />
    },
]