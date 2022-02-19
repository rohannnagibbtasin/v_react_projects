const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId',
};

export const getDepartmentCollection = () => [
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
];

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null) localStorage.setItem(KEYS.employeeId, '0');
    // eslint-disable-next-line radix
    let id = parseInt(localStorage.getItem(KEYS.employeeId));
    // eslint-disable-next-line no-plusplus
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(KEYS.employees));
}
export function insertEmployee(data) {
    const employees = getAllEmployees();
    // eslint-disable-next-line no-param-reassign
    data.id = generateEmployeeId();
    employees.push(data);
    localStorage.setItem(KEYS, employees, JSON.stringify(employees));
}
