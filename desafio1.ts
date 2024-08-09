

let employee: {code: number; name: string } = {
    code: 10,
    name: 'John'
}

let employee2 = {
    code: 10,
    name: 'John'
}

interface Employee {
    code: number,
    name: string
}

let employee3: Employee = {
    code: 10,
    name: 'John'
}

let employee4 = {} as Employee

employee4.code = 10
employee.name = 'John'