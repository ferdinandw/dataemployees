const DATA = {
    "employees" : [
        {"firstName" : "John", "lastName": "Doe"},
        {"firstName" : "Anna", "lastName": "Smith"},
        {"firstName" : "Peter", "lastName": "Jones"},
        {"firstName" : "Doni", "lastName": "Wong"},
        {"firstName" : "Slamet", "lastName": "Jordan"},
        {"firstName" : "Carlo", "lastName": "Wee"},
        {"firstName" : "Philips", "lastName": "Morris"},
        {"firstName" : "Angga", "lastName": "Dwi"},
        {"firstName" : "Vicky", "lastName": "Sasongko"},
        {"firstName" : "Nadya", "lastName": "Lembayung"},
    ],
    "jobs": [
        {"department" : "QC", "title" : "QA"},
        {"department" : "IT", "title" : ['IT Support', 'Software Engineer', 'UI/UX', 'DevOps', 'Tester']},
        {"department" : "Human Resources Development", "title" : "SPV"},
        {"department" : "Finance and Accounting", "title" : "Finance"},
        {"department" : "Marketing dan Customer Service", "title" : "marketing"},
        {"department" : "Maintance and Facility", "title" : "maintenance"},
    ],

    "details" : [
        {"age" : [22, 23, 24, 29, 30, 32]},
        {"experience" : ['2 Tahun', '3 Tahun', '4 Tahun']}
    ]
}
// let anna2 ={
//     printAnna: function(){
//         console.log (`
//         Nama ${name[0].firstName} ${name[0].lastName} 
//         Job : ${job[1].department}, Title : ${job[2].title}
//         Age : ${age.age[3]} Tahun
//         Experience : ${exp.experience[1]}
//     `)
//     }
// }


let name = DATA.employees
let job = DATA.jobs;
let dpt = DATA.jobs.department;
let jobTitle = DATA.jobs
let age = DATA.details[0];
let exp = DATA.details[1];
// ANNA
let anna = (`
Nama ${name[1].firstName} ${name[1].lastName} 
Job : ${job[1].department}, Title : ${job[4].title}
Age : ${age.age[0]} Tahun
Experience : ${exp.experience[1]}
`)
let john = (`
Nama ${name[0].firstName} ${name[0].lastName} 
Job : ${job[1].department}, Title : ${job[4].title}
Age : ${age.age[0]} Tahun
Experience : ${exp.experience[1]}
`)
let peter = (`
Nama ${name[2].firstName} ${name[2].lastName} 
Job : ${job[1].department}, Title : ${job[4].title}
Age : ${age.age[0]} Tahun
Experience : ${exp.experience[1]}
`)
let doni = (`
Nama ${name[3].firstName} ${name[3].lastName} 
Job : ${job[1].department}, Title : ${job[4].title}
Age : ${age.age[0]} Tahun
Experience : ${exp.experience[1]}
`)




console.log (`
    Nama ${name[4].firstName} ${name[4].lastName} 
    Job : ${job[1].department}, Title : ${job[2].title}
    Age : ${age.age[3]} Tahun
    Experience : ${exp.experience[1]}
`)

console.log (`
    Nama ${name[5].firstName} ${name[5].lastName} 
    Job : ${job[1].department}, Title : ${job[2].title}
    Age : ${age.age[3]} Tahun
    Experience : ${exp.experience[0]}
`)

console.log (`
    Nama ${name[6].firstName} ${name[6].lastName} 
    Job : ${job[1].department}, Title : ${job[1].title[3]}
    Age : ${age.age[3]} Tahun
    Experience : ${exp.experience[2]}
`)


// test
console.log (anna)
console.log (john)
console.log (peter)
console.log (doni)