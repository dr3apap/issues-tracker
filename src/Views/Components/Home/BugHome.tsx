
// import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import styles from './home.module.css';

const BugHome = () => {
    
  return (
    <>
      
      <header className={styles.pageWrapper}>
        <h1>Bug<span>.</span><span>Tracker</span></h1>
      </header>
      <div>
       <p>Report or track</p>
       <button>Issue</button>
      </div>
      
    </>
  );


}


export default BugHome;