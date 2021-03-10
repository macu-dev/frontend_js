async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {   
    const response = await fetch(url);
    const data = await response.json();
    const arrData = data;
    printEmailUser(arrData);
    getBiggerIdUser(arrData);
    findNumberPhone(arrData, '024-648-3804');
    
  } catch (error) {
    console.log(error);
  }
}

function printEmailUser(emails) {
  emails.forEach(({email}) => {
    console.log(email);
  })
}

function getBiggerIdUser(users) {
  const results = users.filter(user => user.id > 5);
  console.log(results);
}

function findNumberPhone(users, search) {
  const found = users.find(user => user.phone === search);
  console.log(found);
}



getData();


