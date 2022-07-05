import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';
import fs from 'fs';
import { validationResult } from 'express-validator';
import {existsSync} from 'fs'


async function imageReq(req:express.Request, res: express.Response) {
    const fileName= req.query.file;
    const fileWidth= req.query.width;
    const fileHeight= req.query.height;


    if(typeof fileWidth === 'number'){
        console.log("valid width");
    }else{
    console.log('Error : you should pass a valid width')
    }
    if(typeof fileHeight === 'string'){
        console.log('valid height')
    }else{
        console.log('Error : you should pass a valid height')
    }
    if(  fileName === 'pic1' || fileName === 'pic2'){
        console.log('valid type ')
    }else{
        console.log('Error : you should pass a valid name')
    }

}

export default imageReq;