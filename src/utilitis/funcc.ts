
import sharp from 'sharp';
import { access, PathLike, promises as fsPromises } from 'fs';
import { existsSync } from 'fs';
import fs from 'fs';




const resizingImg = async(f:string,w: string, h:string, fName:any)=>{

try{
await sharp(f)
.resize(parseInt(w),parseInt(h))
.toFile(`output+${w}+${h}.jpg`)
.then(async()=> {
await fsPromises.opendir('thumbnails');
const moveFile = await fsPromises.rename(`output+${w}+${h}.jpg`, `thumbnails/${fName}+${w}+${h}.jpg`);
})
}catch(error){
    console.log(error);
}
}
export default resizingImg;