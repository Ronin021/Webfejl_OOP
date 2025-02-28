const manager = new Manager();
const studentArea = new StudentArea('student-list', manager);
const detailsArea = new DetailsArea('details', manager);

const array = [
    {
        "name": "Alice",
        "average": 84.13,
        "comment": "Has a positive attitude."
    },
    {
        "name": "Bob",
        "average": 91.78,
        "comment": "Excellent performance!"
    },
    {
        "name": "Charlie",
        "average": 74.75,
        "comment": "!!!Picture!!!",
        "bad": true
    },
    {
        "name": "Diana",
        "average": 94.84,
        "comment": "Outstanding in sports."
    },
    {
        "name": "Ethan",
        "average": 58.54,
        "comment": "Has a positive attitude."
    },
    {
        "name": "Fiona",
        "average": 59.3,
        "comment": "Very disciplined."
    },
    {
        "name": "George",
        "average": 86.71,
        "comment": "Very punctual and disciplined."
    },
    {
        "name": "Hannah",
        "average": 91.0,
        "comment": "Has a positive attitude."
    },
    {
        "name": "Ian",
        "average": 50.59,
        "comment": "Has a positive attitude."
    },
    {
        "name": "Julia",
        "average": 74.28,
        "comment": "Shows consistent effort."
    }
];

for(const element of array){
    const stud = new Student(element.name, element.average, element.comment, element.bad);
    manager.add(stud);
}