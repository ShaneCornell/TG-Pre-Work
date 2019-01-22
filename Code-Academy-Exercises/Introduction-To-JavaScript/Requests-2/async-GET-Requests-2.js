const getData = async() => {
  try {
   const response = await fetch('https://api-to-call.com/endpoint')
   if (response.ok === true) {
     const jsonResponse = await response.json()
     return jsonResponse;
   }
    throw new Error('Request failed!')
  }
  catch(error){
    console.log(error)
  }
};

/* I learned about async get requests. */
