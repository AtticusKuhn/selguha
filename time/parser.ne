

time_statement -> 
  "next" _ time_predicate {%d=>d[2]%}
 | "in" _ time_period {%d=>d[2]%}
 | time_predicate {%id%}
 | filter _ ("in" | "of"):? _:? time_predicate {%d=>({
     type:"filter-predicate",
     filter: d[0],
     time_predicate:d[4]
 })%} 

filter -> 
    "every" {%d=>(_index)=>true%}
    | "every other"{%d=>(_index)=>index % 2 === 0%}
    | "every" _ ordinal {%d=>(_index)=>index % d[2].value === 0%}
time_predicate  ->  stime_predicate (_ "and" _ time_predicate):?
stime_predicate -> double_exact_date (_ "at":? _:? time):?
time_period -> ("a" | digit)  _ epoch "s":?
epoch -> "second" | "minute" | "week" | "month" | "year"
digit -> ("0" |  "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") {%id%}
digits -> digit:+ {%d=>ParseInt(d.join(""))%}
ordinal -> digits ("st" | "th" | "rd") {%d=>({
    type:"ordinal",
    value:d,
})%}
double_exact_date -> exact_date (_ ("of" | "in") _ exact_date):? {%d=>{
    const g1 = d[0]
    const g2 = d[5]
    if(!g2) return g1
    return (start)=> function*(){
        const gen1 = g1(start);
        const gen2 = g2(start);
        let iter = 0
        while(gen1.next() && gen2.next()){
            iter++
            if(iter > 10){
                return null;
            }
            if(gen1.value.getTime() === gen2.value.getTime()){
                yield gen1.value;
            }
        }
    }
}%}
exact_date -> slash_date
 | dash_date
 | date
 | day
 | month
slash_date -> digits "/" digits "/" digits
dash_date -> digits "-" digits "-" digits
month -> "jan" | "feb" | "mar" | "apr" | "jun" | "jul" | "aug" |"sep" | "oct" | "nov" | "dec"
    | "january" | "febuary" | "march" | "april" | "may" | "june" |"july" | "August" | "september"
    |"october" |"november" | "december"
day -> "mon" | "tues" | "weds" | "wed" | "thurs" | "fri" | "sat" | "sun"
 | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
date -> date _ digits _:? digits:?
 | "the":? _:? digits ("st"| "th" | "rd"):? _ ("of"):? _ month _:? digits:?
_-> " "
noon -> "am" | "pm" 
time -> 
 digits _:? noon
 | digits ":" digits _ noon:?
 | "afternoon"
 | "morning"
 | "noon"
 | "evening"
 | "night"


