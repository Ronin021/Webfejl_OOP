const manager = new Manager();
Gomszab.addFileUploader(fileResult => {
    const fileLines = fileResult.split('\n')

    for(const line of fileLines){
        const fields = line.split(';')
        const bad = fields[3].trim() === 1 ? true : false;
        const student = new Student(fields[0], fields[1], fields[2], bad)
        manager.add(student)
    }

    manager.render()
})
const studentArea = new StudentArea('student-list', manager);
const detailsArea = new DetailsArea('details', manager);


