import { Express } from "express";

import { UrlModel } from "../model/shortUrl";

// import * as Express from "express";


import { Request, Response } from "express";
import { url } from "inspector";

interface CreateUrlRequest extends Request {
    body: {
        fullUrl: string; // Define the expected fields in the request body
    };
}




export const createURL = async (req: CreateUrlRequest, res: Response) => {
    try {
    console.log("the fullurl is ", req.body.fullUrl);
    const urlFound = await UrlModel.find({ fullUrl: req.body.fullUrl });
    if (urlFound.length > 0) {
        return res.status(409).json({
            message: "URL already exists",
            data: urlFound,
        });
    }
    else
    {
        const shortUrl = await UrlModel.create({fullUrl: req.body.fullUrl});
        res.status(201).send(shortUrl);
    }
    }
    catch (error) {
        console.error("Error creating URL:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}





export const getallURL = async (req: CreateUrlRequest, res: Response) => {
    
 try {
    const allUrls = await UrlModel.find();
    if (allUrls.length > 0) {
         res.status(200).json({allUrls});
    }
    else
    {
        res.status(404).json({
            message: "No URLs found"
        });
    }
 }
 catch (error) {
    console.error("Error creating URL:", error);
    res.status(500).json({ message: "Internal server error" });
}
}




export const getURL = async (req: CreateUrlRequest, res: Response) => {  
    try 
    {
        const shortUrl = await UrlModel.findById(req.params.id);
        if (!shortUrl)
        {
            res.status(404).send({message:"URL not found"});
        }
        else
        {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`$shortUrl.fullUrl`);
    
        }
    }
    catch (error) {
        console.error("Error creating URL:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const deleteURL = async (req: CreateUrlRequest, res: Response) => {   
     try 
    {
        const shortUrl = await UrlModel.findById(req.params.id);
        if (shortUrl)
        {
            res.status(204).send({message:"URL deleted successfully"});
        }
        else
        {
            
            res.status(404).send({message:"URL not found"});    
    
        }
    }
    catch (error) {
        console.error("Error creating URL:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}





