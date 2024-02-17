export interface PriorityOutput {
    color: string;
    level: string;
}

export default function assignPrioriy(priority: string): PriorityOutput {
    const colors: string[] = ["#FF6700", "#B33AA3", "#32CD32",];
    const levels: string[] = ["High", "Medium", "Low"];

    function mapArg(arg: string) {
        if (arg == "Open") {
            return {
                color: colors[0],
                level: levels[0]
            }
        } else if (arg == "In Progress") {
            return {
                color: colors[1],
                level: levels[1]
            }
        } else if (arg == "Closed") {
            return {
                color: colors[2],
                level: levels[2]
            }
        }
    }
    const obj = mapArg(priority)
    return obj as PriorityOutput

}




