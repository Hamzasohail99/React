var namevar = 'andrew';
var namevar = 'mike';
console.log('namevar', namevar);

let namelet = 'jen';
namelet = 'julie';
console.log('namelet',namelet);

const nameconst = 'frank';

console.log('nameconst',nameconst);

function getpetname(){
    const petname = 'hal';
    return petname;
}

const petname = getpetname();
console.log(petname);

//block scoping

var fullname = 'andrew med';
if(fullname){
    const firstname = fullname.split(' ')[0];
    console.log(firstname);
}
console.log(firstname);