import { useState } from 'react';

type UseForm = (arg: FormState) => void;
export type FormState = {
    login: boolean,
    editing: boolean,
    signup: boolean
}

// type FormStateUpdate = {

//   [key:string]: boolean;
// };

function useForm(): [FormState, UseForm] {
    const [formState, setFormState] = useState<FormState>({
        login: true,
        editing: false,
        signup: false
    })

    const setForm = (obj: FormState) => {
        setFormState(
            obj
        );
    }
    return [formState, setForm]
}

export default useForm;
