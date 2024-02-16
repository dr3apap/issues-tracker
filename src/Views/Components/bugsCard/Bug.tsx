
type BugProps = {
    issue: {
        name: string,
        version: String,
    },
    level: "Open" | "In Progress" | "Closed" | string | undefined
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
