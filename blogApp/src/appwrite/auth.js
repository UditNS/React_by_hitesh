import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// we can copy the templete code from appwrite but we aren't doing that because there is not a good structure and with new way it is quality improvement.

// created a class so to access the property of this class. object creation needed

// I need to create a client and need to create a account with that client
export class AuthService{
    client = new Client()
    account;
    // this is code same as appwrite code we just modify it for better practices
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);  
        this.account = new Account(this.client);
    }

    
}



const authService = new AuthService()

export default authService;
