export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
   // catch others
  const address = searchParams.get('address')
  const phoneNumber = searchParams.get('phoneNumber')
  const dob = searchParams.get('dob')


 


  console.log(email);
  console.log(pass);
  console.log(address);
  console.log(phoneNumber)
  console.log(dob)


 

  // database call goes here

// =================================================
const { MongoClient } = require('mongodb');


//const url = 'mongodb://root:example@localhost:27017/';

const url = 'mongodb+srv://b00144222:1hvao2xcY3xBbXJB@cluster0.ddmslxc.mongodb.net/?retryWrites=true&w=majority';


const client = new MongoClient(url);
const dbName = 'app'; // database name
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('login'); // collection name




const findResult = await collection.insertOne({"username":email, "pass": pass, "address": address, "phoneNumber": phoneNumber, "dob": dob});






//==========================================================



  // at the end of the process we need to send something back.
  return Response.json({ "data":"" + valid + ""})
}

