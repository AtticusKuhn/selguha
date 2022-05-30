import { time } from "console";
import nearley from "nearley"

const grammar = require("../grammar.js")

export function parse(code: string): any {
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

export const timeValid = (timeString: string): boolean => parse(timeString) ? true : false;