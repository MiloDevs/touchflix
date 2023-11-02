import { Client,Account,  } from 'appwrite';


//Init Sdk
const client = new Client();
const account = new Account(client);

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6540b49ed979d731d94d');

type userData = {
    name: string,
    email: string,
    phone: number,
    password: string,
}

export default function listUsers(){
    const response = account.listIdentities();
    console.log(response);
}

export function createUser(userData: userData){
    const response = account.create(userData.email, userData.password, userData.name);
    console.log(response);
}

export async function login(email: string, password: string){
    const response = account.createEmailSession(email, password);
    response.then((result) => {
        console.log(result);
    });
}
