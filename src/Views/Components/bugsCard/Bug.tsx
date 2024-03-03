import MakeBugs from '../../../Models/bugsFactory'
import Application from '../../../Models/appFactory';

export interface IssueToApp {
    app: Application;
    level: string,
}

const issueCard = ({ app, level }: IssueToApp
) => {
    const { appName, appVersion, repolink } = app;
    return (
        <>
            <h2>{appName}</h2>
            <h4>{level}</h4>
            <h5>{appVersion}</h5>
            <h5>{repolink ? `${repolink}` : ''}</h5>
        </>
    );


}

export default issueCard;
