import {v2} from "cloudinary"
import { response } from "express";
import fs from "fs"
cloudinary.config({ 
    cloud_name: proce.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET 
});
const uploadCloudinary=async(loacalFilePath)=>{
    try{
        if(!loacalFilePath) return null;
        //upload file on cloudinary
        const response= await cloudinary.uploader.upload(loacalFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded succesfully
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(loacalFilePath)
        return null;
    }
}
export {uploadCloudinary}