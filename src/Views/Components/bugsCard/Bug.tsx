import MakeBugs from '../../../Models/bugsFactory'

type BugProps = {
    issue: MakeBugs
    level: string,
}

const Bug = ({ issue, level }: BugProps) => {
    const { name, version } = issue;
    return (
        <>
            <h2>{name}</h2>
            <h4>{level}</h4>
            <h5>{version}</h5>
        </>
    );


}

export default Bug;
