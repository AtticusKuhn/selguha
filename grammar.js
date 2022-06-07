// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const dayParser  =(d)=>{
     const dayName = d[0]
     const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"]
                      .indexOf(dayName.slice(0,3).toLowerCase());
    return  function*(start){
          
        if (dayOfWeek < 0) return null;
        let iter = 0
        while(true){
            iter++
            const s = new Date()
            s.setHours(0,0,0,0);
            s.setDate(start.getDate()  + iter*7+
                (dayOfWeek + 7 - start.getDay()) % 7);
            const end = new Date();
            end.setHours(23)
            end.setDate(start.getDate()  + iter*7+
                (dayOfWeek + 7 - start.getDay()) % 7);
            yield {
                start:s,
                end,
            };
        }
    }
    }
const monthParser  =(d)=>{
     const monthName = d[0]
     const month = ["jan","feb","mar","apr","may","jun","jul", "aug", "sep", "oct", "nov"]
                      .indexOf(monthName.slice(0,3).toLowerCase());
    return  function*(start){
          
        if (month < 0) return null;
        let iter = 0
        while(true){
            iter++
            const d1 = new Date(start.getFullYear()+iter, month, 1);
            const d2 = new Date(start.getFullYear()+iter, month, 30);

            yield {
                start:d1,
                end:d2,
            };
        }
    }
}
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "time_statement$string$1", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time_statement", "symbols": ["time_statement$string$1", "_", "time_predicate"], "postprocess": d=>d[2]},
    {"name": "time_statement$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time_statement", "symbols": ["time_statement$string$2", "_", "time_period"], "postprocess": d=>d[2]},
    {"name": "time_statement", "symbols": ["time_predicate"], "postprocess": id},
    {"name": "time_statement$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time_statement$ebnf$1$subexpression$1", "symbols": ["time_statement$ebnf$1$subexpression$1$string$1"]},
    {"name": "time_statement$ebnf$1$subexpression$1$string$2", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time_statement$ebnf$1$subexpression$1", "symbols": ["time_statement$ebnf$1$subexpression$1$string$2"]},
    {"name": "time_statement$ebnf$1", "symbols": ["time_statement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "time_statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time_statement$ebnf$2", "symbols": ["_"], "postprocess": id},
    {"name": "time_statement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time_statement", "symbols": ["filter", "_", "time_statement$ebnf$1", "time_statement$ebnf$2", "time_predicate"], "postprocess": d=>{
            console.log("filter d", d)
            const filter = d[0]
            const time_predicate = d[4]
        return function*(start){
            const g = time_predicate(start)
            let iter = 0
            while (true){
                const n = g.next()
                console.log("n", n)
                const val = n.value;
                if(n.done){
                    return null;
                }
                if(filter(iter)){
                    yield val;
                }
                iter++
            }
        }
        
         }},
    {"name": "filter$string$1", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "filter", "symbols": ["filter$string$1"], "postprocess": d=>(_index)=>true},
    {"name": "filter$string$2", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "filter", "symbols": ["filter$string$2"], "postprocess": d=>(index)=>index % 2 === 0},
    {"name": "filter$string$3", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "filter", "symbols": ["filter$string$3", "_", "ordinal"], "postprocess": d=>(index)=>index % d[2].value === 0},
    {"name": "time_predicate$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time_predicate$ebnf$1$subexpression$1", "symbols": ["_", "time_predicate$ebnf$1$subexpression$1$string$1", "_", "time_predicate"]},
    {"name": "time_predicate$ebnf$1", "symbols": ["time_predicate$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "time_predicate$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time_predicate", "symbols": ["stime_predicate", "time_predicate$ebnf$1"], "postprocess": d=>{
            //todo
            return d[0]
        }},
    {"name": "stime_predicate$ebnf$1$subexpression$1$ebnf$1$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "stime_predicate$ebnf$1$subexpression$1$ebnf$1", "symbols": ["stime_predicate$ebnf$1$subexpression$1$ebnf$1$string$1"], "postprocess": id},
    {"name": "stime_predicate$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "stime_predicate$ebnf$1$subexpression$1$ebnf$2", "symbols": ["_"], "postprocess": id},
    {"name": "stime_predicate$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "stime_predicate$ebnf$1$subexpression$1", "symbols": ["_", "stime_predicate$ebnf$1$subexpression$1$ebnf$1", "stime_predicate$ebnf$1$subexpression$1$ebnf$2", "time"]},
    {"name": "stime_predicate$ebnf$1", "symbols": ["stime_predicate$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "stime_predicate$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "stime_predicate", "symbols": ["double_exact_date", "stime_predicate$ebnf$1"], "postprocess": d=>{
            console.log("stime_predicate", d)
            if(!d[1]){
                return d[0]
            }
            return function*(start){
                const gen = d[0](start);
                while(true){
                    const next = gen.next()
                    const value = next.value;
                    const done = next.done;
                    if(done){
                        return null;
                    }
                    const start = value.start;
                    const end  = value.end;
                    start.setHours(...d[1][3].start)
                    end.setHours(...d[1][3].start)
                    return {
                        start, end
                    }
                } 
            }
        }},
    {"name": "time_period$subexpression$1", "symbols": [{"literal":"a"}]},
    {"name": "time_period$subexpression$1", "symbols": ["digit"]},
    {"name": "time_period$ebnf$1", "symbols": [{"literal":"s"}], "postprocess": id},
    {"name": "time_period$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time_period", "symbols": ["time_period$subexpression$1", "_", "epoch", "time_period$ebnf$1"]},
    {"name": "epoch$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "epoch", "symbols": ["epoch$string$1"]},
    {"name": "epoch$string$2", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "epoch", "symbols": ["epoch$string$2"]},
    {"name": "epoch$string$3", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "epoch", "symbols": ["epoch$string$3"]},
    {"name": "epoch$string$4", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "epoch", "symbols": ["epoch$string$4"]},
    {"name": "epoch$string$5", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "epoch", "symbols": ["epoch$string$5"]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"0"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"1"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"2"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"3"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"4"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"5"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"6"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"7"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"8"}]},
    {"name": "digit$subexpression$1", "symbols": [{"literal":"9"}]},
    {"name": "digit", "symbols": ["digit$subexpression$1"], "postprocess": id},
    {"name": "digits$ebnf$1", "symbols": ["digit"]},
    {"name": "digits$ebnf$1", "symbols": ["digits$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digits", "symbols": ["digits$ebnf$1"], "postprocess": d=>parseInt(d[0].join(""))},
    {"name": "ordinal$subexpression$1$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ordinal$subexpression$1", "symbols": ["ordinal$subexpression$1$string$1"]},
    {"name": "ordinal$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ordinal$subexpression$1", "symbols": ["ordinal$subexpression$1$string$2"]},
    {"name": "ordinal$subexpression$1$string$3", "symbols": [{"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ordinal$subexpression$1", "symbols": ["ordinal$subexpression$1$string$3"]},
    {"name": "ordinal", "symbols": ["digits", "ordinal$subexpression$1"], "postprocess": d=>({
            type:"ordinal",
            value:d,
        })},
    {"name": "double_exact_date$ebnf$1$subexpression$1$subexpression$1$string$1", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "double_exact_date$ebnf$1$subexpression$1$subexpression$1", "symbols": ["double_exact_date$ebnf$1$subexpression$1$subexpression$1$string$1"]},
    {"name": "double_exact_date$ebnf$1$subexpression$1$subexpression$1$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "double_exact_date$ebnf$1$subexpression$1$subexpression$1", "symbols": ["double_exact_date$ebnf$1$subexpression$1$subexpression$1$string$2"]},
    {"name": "double_exact_date$ebnf$1$subexpression$1", "symbols": ["_", "double_exact_date$ebnf$1$subexpression$1$subexpression$1", "_", "exact_date"]},
    {"name": "double_exact_date$ebnf$1", "symbols": ["double_exact_date$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "double_exact_date$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "double_exact_date", "symbols": ["exact_date", "double_exact_date$ebnf$1"], "postprocess": d=>{
            console.log("double_exact_date", d)
            const g1 = d[0]
            const g21 = d[1]
            if(!g21) return g1
            const g2 = g21[3]
            return  function*(start){
                const gen1 = g1(start);
                const gen2 = g2(start);
                let iter = 0
                let v1 = gen1.next()
                let v2 = gen2.next()
                // debugger
                while(!v1.done || !v2.done){
                    iter++
                    if(iter > 100){
                        return null;
                    }
                    debugger;
                    if(v1.value.end.getTime()  > v2.value.start.getTime()){
                        yield {
                            start:v2.value.start,
                            end: v1.value.end
                        };
                    }
                    v1 = gen1.next()
                    v2 = gen2.next()
                }
            }
        }},
    {"name": "exact_date", "symbols": ["slash_date"], "postprocess": id},
    {"name": "exact_date", "symbols": ["dash_date"], "postprocess": id},
    {"name": "exact_date", "symbols": ["date"], "postprocess": id},
    {"name": "exact_date", "symbols": ["days"], "postprocess": id},
    {"name": "exact_date", "symbols": ["month"], "postprocess": id},
    {"name": "slash_date", "symbols": ["digits", {"literal":"/"}, "digits", {"literal":"/"}, "digits"], "postprocess": d=>{
            console.log("slash date, d=",d)
            return function*(start){
                console.log("slash date", d.join(""))
            const d1 = new Date(d.join(""))
            d1.setHours(0)
            const d2 = new Date(d.join(""))
            d2.setHours(23)
            return {
                start:d1,
                end:d2
            }
            }
        }},
    {"name": "dash_date", "symbols": ["digits", {"literal":"-"}, "digits", {"literal":"-"}, "digits"], "postprocess": d=>{
            return function*(start){
                const d1 = new Date(d.join(""))
            d1.setHours(0)
            const d2 = new Date(d.join(""))
            d2.setHours(23)
            return {
                start:d1,
                end:d2
            }
            }
        }},
    {"name": "month$string$1", "symbols": [{"literal":"j"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$1"], "postprocess": monthParser},
    {"name": "month$string$2", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$2"], "postprocess": monthParser},
    {"name": "month$string$3", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$3"], "postprocess": monthParser},
    {"name": "month$string$4", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$4"], "postprocess": monthParser},
    {"name": "month$string$5", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$5"], "postprocess": monthParser},
    {"name": "month$string$6", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$6"], "postprocess": monthParser},
    {"name": "month$string$7", "symbols": [{"literal":"a"}, {"literal":"u"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$7"], "postprocess": monthParser},
    {"name": "month$string$8", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$8"], "postprocess": monthParser},
    {"name": "month$string$9", "symbols": [{"literal":"o"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$9"], "postprocess": monthParser},
    {"name": "month$string$10", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"v"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$10"], "postprocess": monthParser},
    {"name": "month$string$11", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$11"], "postprocess": monthParser},
    {"name": "month$string$12", "symbols": [{"literal":"j"}, {"literal":"a"}, {"literal":"n"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$12"], "postprocess": monthParser},
    {"name": "month$string$13", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"b"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$13"], "postprocess": monthParser},
    {"name": "month$string$14", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$14"], "postprocess": monthParser},
    {"name": "month$string$15", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$15"], "postprocess": monthParser},
    {"name": "month$string$16", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$16"], "postprocess": monthParser},
    {"name": "month$string$17", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$17"], "postprocess": monthParser},
    {"name": "month$string$18", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$18"], "postprocess": monthParser},
    {"name": "month$string$19", "symbols": [{"literal":"A"}, {"literal":"u"}, {"literal":"g"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$19"], "postprocess": monthParser},
    {"name": "month$string$20", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"p"}, {"literal":"t"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$20"], "postprocess": monthParser},
    {"name": "month$string$21", "symbols": [{"literal":"o"}, {"literal":"c"}, {"literal":"t"}, {"literal":"o"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$21"], "postprocess": monthParser},
    {"name": "month$string$22", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$22"], "postprocess": monthParser},
    {"name": "month$string$23", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "month", "symbols": ["month$string$23"], "postprocess": monthParser},
    {"name": "days$ebnf$1", "symbols": [{"literal":"s"}], "postprocess": id},
    {"name": "days$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "days", "symbols": ["day", "days$ebnf$1"], "postprocess": d=>d[0]},
    {"name": "day$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$1"], "postprocess": dayParser},
    {"name": "day$string$2", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$2"], "postprocess": dayParser},
    {"name": "day$string$3", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$3"], "postprocess": dayParser},
    {"name": "day$string$4", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$4"], "postprocess": dayParser},
    {"name": "day$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$5"], "postprocess": dayParser},
    {"name": "day$string$6", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$6"], "postprocess": dayParser},
    {"name": "day$string$7", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$7"], "postprocess": dayParser},
    {"name": "day$string$8", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$8"], "postprocess": dayParser},
    {"name": "day$string$9", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$9"], "postprocess": dayParser},
    {"name": "day$string$10", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"e"}, {"literal":"s"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$10"], "postprocess": dayParser},
    {"name": "day$string$11", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"d"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$11"], "postprocess": dayParser},
    {"name": "day$string$12", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$12"], "postprocess": dayParser},
    {"name": "day$string$13", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$13"], "postprocess": dayParser},
    {"name": "day$string$14", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$14"], "postprocess": dayParser},
    {"name": "day$string$15", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "day", "symbols": ["day$string$15"], "postprocess": dayParser},
    {"name": "date$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "date$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date$ebnf$2", "symbols": ["digits"], "postprocess": id},
    {"name": "date$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date", "symbols": ["date", "_", "digits", "date$ebnf$1", "date$ebnf$2"]},
    {"name": "date$ebnf$3$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$3", "symbols": ["date$ebnf$3$string$1"], "postprocess": id},
    {"name": "date$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date$ebnf$4", "symbols": ["_"], "postprocess": id},
    {"name": "date$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date$ebnf$5$subexpression$1$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$5$subexpression$1", "symbols": ["date$ebnf$5$subexpression$1$string$1"]},
    {"name": "date$ebnf$5$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$5$subexpression$1", "symbols": ["date$ebnf$5$subexpression$1$string$2"]},
    {"name": "date$ebnf$5$subexpression$1$string$3", "symbols": [{"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$5$subexpression$1", "symbols": ["date$ebnf$5$subexpression$1$string$3"]},
    {"name": "date$ebnf$5", "symbols": ["date$ebnf$5$subexpression$1"], "postprocess": id},
    {"name": "date$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date$ebnf$6$subexpression$1$string$1", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$6$subexpression$1", "symbols": ["date$ebnf$6$subexpression$1$string$1"]},
    {"name": "date$ebnf$6", "symbols": ["date$ebnf$6$subexpression$1"], "postprocess": id},
    {"name": "date$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date$ebnf$7", "symbols": ["_"], "postprocess": id},
    {"name": "date$ebnf$7", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date$ebnf$8", "symbols": ["digits"], "postprocess": id},
    {"name": "date$ebnf$8", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date", "symbols": ["date$ebnf$3", "date$ebnf$4", "digits", "date$ebnf$5", "_", "date$ebnf$6", "_", "month", "date$ebnf$7", "date$ebnf$8"]},
    {"name": "_", "symbols": [{"literal":" "}]},
    {"name": "noon$string$1", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "noon", "symbols": ["noon$string$1"]},
    {"name": "noon$string$2", "symbols": [{"literal":"p"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "noon", "symbols": ["noon$string$2"]},
    {"name": "time$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "time$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time", "symbols": ["digits", "time$ebnf$1", "noon"], "postprocess": d=>({
            start:[d[0], 0],
            end:[d[0], 1]
        })},
    {"name": "time$ebnf$2", "symbols": ["noon"], "postprocess": id},
    {"name": "time$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "time", "symbols": ["digits", {"literal":":"}, "digits", "_", "time$ebnf$2"], "postprocess": d=>({
            start:[d[0], d[2]],
            end:[d[0], d[1]]
        })},
    {"name": "time$string$1", "symbols": [{"literal":"a"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"o"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time", "symbols": ["time$string$1"], "postprocess": d=>({
            start:[1,0],
            end: [3,0]
        })},
    {"name": "time$string$2", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time", "symbols": ["time$string$2"], "postprocess": d=>({
            start:[6,0],
            end: [9,0]
        })},
    {"name": "time$string$3", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time", "symbols": ["time$string$3"], "postprocess": d=>({
            start:[12,0],
            end: [12,1]
        })},
    {"name": "time$string$4", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time", "symbols": ["time$string$4"], "postprocess": d=>({
            start:[5,0],
            end: [7,0]
        })},
    {"name": "time$string$5", "symbols": [{"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "time", "symbols": ["time$string$5"], "postprocess": d=>({
            start:[8,0],
            end: [6,0]
        })}
]
  , ParserStart: "time_statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
