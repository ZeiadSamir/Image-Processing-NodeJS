import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';
import fs from 'fs';
import { validationResult } from 'express-validator';
import {existsSync} from 'fs'


async function imageReq(
    req:express.Request,
    res: express.Response,
    fN:any,
    w:string,
    h:string) {



    if(typeof w === 'string'){
        console.log("valid width");
    }else{

    console.log('Error : you should pass a valid width');
    res.send('Error : you should pass a valid width');
    }
    if(typeof h === 'string'){
        console.log('valid height')
    }else{
        console.log('Error : you should pass a valid height')
    }
    if(  fN === 'pic1' || fN === 'pic2'){
        console.log('valid type ')
    }else{
        console.log('Error : you should pass a valid name')
    }

}

export default imageReq;