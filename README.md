# Image Processing Project Docs


## Important Commands

* To run the server :
Run => (npm run server) in Terminal
* To run prettier :
Run =>  (npm run prettier ) in Terminal
* To run superTest (sum.test.ts) :
Run => npm run test



## Avoid issues

* UPDATE
 : if you face any err <ul>"'ts-node' is not recognized as an internal or external command, operable program or batch file."</ul>
  then you have to install ts-node globally >> in terminal >> npm install -g ts-node.


## To resize image :

type => http://localhost:5000/api/resize?file=?&width=?&height=?

image name :

1- pic1.jpg

2- pic2.jpg

Replace the above URL with :
pic1,
width and height you need

_____________________________

## App features

This app was developed to make it easy to resize an image from the default "width" & "Height" to a new size that you choose.

### Preview


![Screenshot 2022-07-05 082958](https://user-images.githubusercontent.com/59052288/177264329-cdba4431-aeb4-450b-bc77-ff14689a20b4.jpg)

![Screenshot 2022-07-05 083426](https://user-images.githubusercontent.com/59052288/177264831-ba3301c3-ac9e-44f7-9674-f28d54014554.jpg)

In the screenshots above, you can see the difference can the resizing feature. 


### Caching

This app is also handle caching, you can't resize the same image with the same width and height more than once, if you request the same image you've already resized it, it conditionally checks if this already resized before then the response will be from the old storage, if not then the app will run and generate your new image normally.


![Screenshot 2022-07-05 084558](https://user-images.githubusercontent.com/59052288/177266369-c6813d86-424c-456a-9ddf-77220e39c5a4.png)



