import nearley from "nearley"

const grammar = require("../grammar.js")
type interval = {
    start: Date,
    end: Date,
}
type timeString = time_predicate
// | filter_predicate
// type filter_predicate = {
//     type: "filter-predicate",
//     filter: filter,
//     time_predicate: time_predicate,
// }
type time_predicate = (start: Date) => Generator<interval, null, never>;
type filter = (index: number) => boolean
// type AST = 
export function parse(code: string): timeString {
    try {
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        parser.feed(code);
        if (parser.results.length > 1) {
            for (let i = 0; i < parser.results.length; i++) {
                console.log("ambiguous parser")
            }
            return parser.results[0]
            // throw new Error("ambiguous parser")
        }
        if (parser.results.length === 0) {
            return null;
            // throw new Error(`no parse found for code "${code}"`)
        }
        return parser.results[0]
    } catch {
        return null;
    }
}
export const next = (currentTime: Date, timeString: timeString): Date => {
    // debugger;
    return timeString(currentTime).next().value.start;
}
export const timeValid = (timeString: string): boolean => parse(timeString) && !parse(timeString)(new Date()).next().done ? true : false;