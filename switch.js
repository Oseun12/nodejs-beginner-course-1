let employee = {
    firstname: "David",
    lastname: "Tucker",
    startdate: new Date(2016,1,3),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
};

switch (employee.department) {
    case 'Engineering':
    console.log('Meet in Building 1');
    break;

    case 'Marketing':
    console.log('Meet in Building 2');
    break;

    case 'HR':
    console.log('Meet in Building 1');

    default:
        console.log('Meet in Building 3');
}
switch (employee.department) {
    case 'Engineering':
    case 'HR':
        console.log('Meet in Building 1');
        break;
    
    case 'Marketing':
        console.log('Meet in Building 2');
        break;
    
        default:
            console.log('Meet in Building 3');
}
