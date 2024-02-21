export type IssuePriority = string;

export default function assignPrioriy(priority: string): string {
    let level = ""
    const levels: string[] = ["High", "Medium", "Low"];
    if (priority == "Open".toLowerCase().trim()) {
        level = levels[0]
    } else if (priority == "In Progress".toLowerCase().trim()) {
        level = levels[1]
    } else if (priority == "Closed".toLowerCase().trim()) {
        level = levels[2]

    }

    return level;
}



