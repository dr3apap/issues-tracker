import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { RootState } from '../../../Controllers/Redux/rootReducer'
import BugsCard from '../bugsCard/BugList'
import { getBugs } from '../../../Controllers/Redux/bugSlice'
import BugView from '../BugView/BugDetail'
import useClick from '../../../Controllers/Hooks/useClick'


const ViewBugs = () => {
    // const [isClicked, setClicked] = useState({
    //     name:"",
    //     isClicked:false
    //   })
    const dispatch = useDispatch();
    const { issues } = useSelector((state: RootState) => state)
    const size: boolean = issues.length < 1;



    useEffect(() => {
        dispatch(getBugs());
    }, [size, dispatch])

    // const bugClicked = (name:string) =>{
    //   setClicked({
    //     name:name,
    //     isClicked:!isClicked.isClicked

    //   })

    // }

    const [isClicked, bugClicked] = useClick();



    return (
        <div className='pageWrapper'>
            {/* {bugs.length  > 0  ? bugs.map((data, key)  => <BugsCard key ={key} bugs={data} clicked={bugClicked}/>):
        <h3 style={{color:"red"}}>Hurray there's no bug reported yet!!</h3>}
   
       {isClicked.clicked && <BugView bug={bugs.filter(bug => bug.appName === isClicked.name )[0]} close={bugClicked}/>} */}

        </div>

    );
}

export default ViewBugs;
