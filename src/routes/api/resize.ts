import express from 'express';
import path from 'path';
import resizingImg from '../../utilitis/funcc';
import fs from 'fs';


const resize = express.Router();




resize.get('/', async(req:express.Request, res:express.Response)=>{

  const fileName= req.query.file;
  const file = path.resolve('storage/images/',`${fileName}`+'.jpg');
  const fileWidth = (req.query['width']as unknown)as string;
  const fileHeight = (req.query['height']as unknown)as string;


  if (file === '' || fileWidth === '' || fileHeight === ''){
    res.send('File, Width and height cannot be empty')
  }if (isNaN(Number(fileWidth))){
      //returns true if the input is not a number
      parseInt(fileWidth)
      if(isNaN(parseInt(fileWidth))){
        res.send('ERROR: must pass a valid width!')
      }
       //check the height value
  }if(isNaN(Number(fileHeight))){
      parseInt(fileHeight)
      if(isNaN(parseInt(fileHeight))){
        res.send('ERROR: must pass a valid height!')
      }
  }
  const  CheckImage = async ()=> {
    //check if resized image is already exist
    try{
    if (fs.existsSync(path.join(__dirname, `../../../thumbnails/${fileName}+${fileWidth}+${fileHeight}.jpg`))) {
      console.log('this file is already exist');
      res.sendFile(path.join(__dirname, `../../../thumbnails/${fileName}+${fileWidth}+${fileHeight}.jpg`));
    }
    else {
      console.log('This Image Does not exit in "Thumbnails" Dir ,  It will start resizing now ')
      await resizingImg(file,fileWidth,fileHeight,fileName);
      res.sendFile(path.join(__dirname, `../../../thumbnails/${fileName}+${fileWidth}+${fileHeight}.jpg`));
    }
  }
  // catch any error during the resizing process
  catch(error){
    console.log(error);
    res.send(`There is an ERROR detected.
    please make sure your passing : valid File name, width and height!`)
  }
}
  CheckImage()
}
)


export default resize ;



