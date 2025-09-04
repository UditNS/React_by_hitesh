import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client;
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);  
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,  // unique id
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )
        } catch (error) {
            console.log("error in createPost" + error)
        }
        

    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,  // unique id
            {
                title,
                content,
                featuredImage,
                status
            }
        )
        } catch (error) {
            console.log("error in updatePost" + error)
        }
    }   
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,  // unique id
        )
        return true;
        } catch (error) {
            console.log("error in deletePost" + error)
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,  // unique id
        )
        } catch (error) {
            console.log("error in getPost" + error)
        }
    }
    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
            // we can also implement pagination here (limit, offset, cursor, etc.
        )
        } catch (error) {
            console.log("error in getPosts" + error)
            return false;
        }
    }
    
}

const service = new Service();

export default service;