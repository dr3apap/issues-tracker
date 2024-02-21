import { useState, useEffect } from 'react';
import MakeBugs from '../../Models/bugsFactory';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../Redux/rootReducer'
import { getBugs } from '../Redux/bugSlice'

type useStateProps = {
    id: string | number,
    clicked: boolean


}
// type ClickControllerArgs = React.Dispatch<React.SetStateAction<{
//     name: string;
//     isClicked: boolean;
// }>>;

type ClicKControllersReturn = (name: string | number) => void;



export default function useClick(): [useStateProps, ClicKControllersReturn, MakeBugs[]] {
    const { issues } = useSelector((state: RootState) => state);
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState({
        id: "",
        clicked: false
    } as useStateProps);

    const size = issues.length;

    useEffect(() => {
        dispatch(getBugs());

    }, [size, dispatch
    ])

    const bugClicked = (id: string | number) => {
        setIsClicked({
            id,
            clicked: !isClicked.clicked
        })
    }


    return [isClicked, bugClicked, issues];


}



