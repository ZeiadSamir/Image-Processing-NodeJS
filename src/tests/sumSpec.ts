import app from '../app';
import  request  from 'supertest';
import resizingImg from '../utilitis/funcc';
import path from 'path';


//testing main route
describe('app',()=> {
    it('Should returns status code 200 if app is running', async()=> {
        const Response = await request(app).get('/');
        expect(Response.statusCode).toBe(200);
    })
});

// testing API route
describe('app',()=> {
    it('Should returns status code 200 if app/api is running', async()=> {
        const Response = await request(app).get('/api');
        expect(Response.statusCode).toBe(200);
    })
});


//testing resize route
describe('resize',()=> {
    it(' Should returns status code 200 if app/api/resize route', async()=> {
        const Response = await request(app).get('/api/resize?file=pic2&width=400&height=400');
        expect(Response.statusCode).toBe(200);
    })
});

//testing async() Resizing function

it('Should resize image', function() {
    const fileName = "pic1";
    const file = path.resolve('storage/images/',`${fileName}`+'.jpg');
    const width = (400 as unknown) as string;
    const height = (400 as unknown) as string;

    resizingImg(fileName,file,width,height  )
    expect(`thumbnails/${fileName}+${width}+${height}.jpg`).toContain(`thumbnails/pic1+400+400.jpg`);
});