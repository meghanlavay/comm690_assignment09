async function getEmployees() {
    try {
        const response = await fetch('/data/employees.json');
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.log(error);
    }
}

export default getEmployees;