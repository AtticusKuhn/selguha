
@{%
const dayParser  =(d)=>{
     const dayName = d[0]
     const dayOfWeek = ["sun","mon","tue","wed","thu","fri","sat"]
                      .indexOf(dayName.slice(0,3).toLowerCase());
    return  function*(start){
          
        if (dayOfWeek < 0) return null;
        let iter = 0
        while(true){
            iter++

            start.setHours(0,0,0,0);
            start.setDate(start.getDate()  + iter*7+
                (dayOfWeek + 7 - start.getDay()) % 7);
            const end = new Date();
            end.setHours(23)
            end.setDate(start.getDate()  + iter*7+
                (dayOfWeek + 7 - start.getDay()) % 7);
            yield {
                start,
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
            const d1 = new Date(start.getFullYear(), month, 1);
            const d2 = new Date(start.getFullYear(), month, 30);

            yield {
                start:d,
                end:d2,
            };
        }
    }
}
%}
time_statement -> 
  "next" _ time_predicate {%d=>d[2]%}
 | "in" _ time_period {%d=>d[2]%}
 | time_predicate {%id%}
 | filter _ ("in" | "of"):? _:? time_predicate {%d=>{
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

  }%} 

filter -> 
    "every" {%d=>(_index)=>true%}
    | "every other"{%d=>(index)=>index % 2 === 0%}
    | "every" _ ordinal {%d=>(index)=>index % d[2].value === 0%}
time_predicate  ->  stime_predicate (_ "and" _ time_predicate):? {%d=>{
    //todo
    return d[0]
}%}
stime_predicate -> double_exact_date (_ "at":? _:? time):? {%d=>{
    if(d[4]){
        d[0].setHours(...d[4].start)
    }
    return d[0]
}%}
time_period -> ("a" | digit)  _ epoch "s":?
epoch -> "second" | "minute" | "week" | "month" | "year"
digit -> ("0" |  "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") {%id%}
digits -> digit:+ {%d=>parseInt(d.join(""))%}
ordinal -> digits ("st" | "th" | "rd") {%d=>({
    type:"ordinal",
    value:d,
})%}
double_exact_date -> exact_date (_ ("of" | "in") _ exact_date):? {%d=>{
    const g1 = d[0]
    const g2 = d[5]
    if(!g2) return g1
    return  function*(start){
        const gen1 = g1(start);
        const gen2 = g2(start);
        let iter = 0
        while(gen1.next() && gen2.next()){
            iter++
            if(iter > 10){
                return null;
            }
            if(gen1.value.end.getTime()  > gen2.value.start.getTime()){
                yield {
                    start:gen2.value.start,
                    end: gen1.value.end
                };
            }
        }
    }
}%}
exact_date -> slash_date {%id%}
 | dash_date {%id%}
 | date {%id%}
 | day {%id%}
 | month {%id%}
slash_date -> digits "/" digits "/" digits{%d=>{
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
}%}
dash_date -> 
    digits "-" digits "-" digits {%d=>{
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
}%}
month -> "jan"  {%monthParser%}
    | "feb" {%monthParser%}
    | "mar" {%monthParser%}
    | "apr" {%monthParser%}
    | "jun" {%monthParser%}
    | "jul" {%monthParser%}
    | "aug" {%monthParser%}
    |"sep" {%monthParser%}
    | "oct" {%monthParser%}
    | "nov" {%monthParser%}
    | "dec"{%monthParser%}
    | "january" {%monthParser%}
    | "febuary" {%monthParser%}
    | "march" {%monthParser%}
    | "april" {%monthParser%}
    | "may" {%monthParser%}
    | "june" {%monthParser%}
    |"july" {%monthParser%}
    | "August" {%monthParser%}
    | "september"{%monthParser%}
    |"october" {%monthParser%}
    |"november" {%monthParser%}
    | "december"{%monthParser%}
day -> 
 "mon" {%dayParser%}
 | "tues" {%dayParser%} 
 | "weds" {%dayParser%} 
 | "wed"  {%dayParser%}
 | "thurs"  {%dayParser%}
 | "fri"  {%dayParser%}
 | "sat" {%dayParser%} 
 | "sun" {%dayParser%}
 | "monday" {%dayParser%}
| "tuesday" {%dayParser%}
| "wednesday"  {%dayParser%}
| "thursday"  {%dayParser%}
| "friday"  {%dayParser%}
| "saturday" {%dayParser%}
| "sunday" {%dayParser%}
date -> date _ digits _:? digits:?
 | "the":? _:? digits ("st"| "th" | "rd"):? _ ("of"):? _ month _:? digits:?
_-> " "
noon -> "am" | "pm" 
time -> 
 digits _:? noon {%d=>({
     start:[d[0], 0],
     end:[d[0], 1]
 })%}
 | digits ":" digits _ noon:?{%d=>({
     start:[d[0], d[2]],
     end:[d[0], d[1]]
 })%}
 | "afternoon"{%d=>({
     start:[1,0],
     end: [3,0]
 })%}
 | "morning"
 {%d=>({
     start:[6,0],
     end: [9,0]
 })%}
 | "noon"{%d=>({
     start:[12,0],
     end: [12,1]
 })%}
 | "evening"{%d=>({
     start:[5,0],
     end: [7,0]
 })%}
 | "night" {%d=>({
     start:[8,0],
     end: [6,0]
 })%}


