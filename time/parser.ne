

time_statement -> 
  "next" _ time_predicate {%d=>d[2]%}
 | "in" _ time_period {%d=>d[2]%}
 | time_predicate {%id%}
 | filter _ ("in" | "of"):? _:? time_predicate 

filter -> 
    "every" 
    | "every other"
    | "every" _ ordinal
time_predicate -> double_exact_date (_ "at":? _:? time):?
time_period -> ("a" | digit)  _ epoch "s":?
epoch -> "second" | "minute" | "week" | "month" | "year"
digit -> "0" |  "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
digits -> digit:+
ordinal -> digits ("st" | "th" | "rd")
double_exact_date -> exact_date (_ ("of" | "in") _ exact_date):?
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
 |"evening"
 | "night"


