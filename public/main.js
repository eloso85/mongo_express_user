console.log("hello");

async function createUser() {
  const response = await fetch("http://localhost:3000/users/user/create", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: `
{
    "username": "Alejandro",
    "email": "test",
    "bio": "test",
    "image": "test"
}
  
  `,
  });

  response.json().then(data => {
    console.log(data);
  });
}

