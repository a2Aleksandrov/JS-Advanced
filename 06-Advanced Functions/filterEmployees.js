function filterEmployees(data, criteria) {

    data = JSON.parse(data);
    let employees = [];

    let key = '';
    let value = '';
    if (criteria == 'all') {
        key = criteria;
    } else {

        [key, value] = criteria.split('-');
    }

    for (let employee of data) {
        if (key == 'all') {
            employees.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
        else if (employee[key] == value) {
            employees.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
    }
    let counter = 0;
    employees.map(employee => {
        console.log(`${counter}. ${employee}`);
        counter++;
    });

}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
);
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson')
