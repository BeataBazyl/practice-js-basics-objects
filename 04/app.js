const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}


const today = new Date();
const month = [today.getMonth() +1].toString();
const day = today.getDate().toString();

user.birthday = function()     {

    if (user.born.month === month && user.born.day == day) {
        console.log('Happy Birthday');
    }

    else {
        console.log('Have a nice day');
    }
}

// console.log(user.born.day, user.born.month);
// console.log(day, month);


user.birthday();