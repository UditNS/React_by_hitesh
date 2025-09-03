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
    // agar kisi din mere ko appwrite change karke firebase use karna hai toh constructor change kar duga bas toh kaam hojaye ha kyuki user se toh mai same input luga sire ye method change karna hoga.

    // creating another method in which i will call all the services of appwrite
    // why async because given in documentation it is a promise
    async createAccount({email, password, name}){
        // account creation method can fail so there is need to handle error -> try/ catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another method which directly logs-in the user
            } 
            else{
                return userAccount;
            }
        
        } catch (error) {
            throw error
        }
    }
}



const authService = new AuthService()

export default authService;
