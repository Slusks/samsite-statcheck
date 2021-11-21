import { Component, OnInit, OnDestroy } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'firebase/compat/functions'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/firestore'
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {/*
    const app = initializeApp(environment.firebaseConfig);
    const db =  getFirestore(app);


    const postTitleField = document.getElementById('.title').querySelector<HTMLInputElement>('.title');
    const articleField = document.getElementById('.article').querySelector<HTMLInputElement>('.article');

// banner
const bannerImage = document.getElementById('#banner-upload').querySelector<HTMLInputElement>('#banner-upload');
const banner = document.getElementById('.banner').querySelector<HTMLInputElement>('.banner');
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
  uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
  uploadImage(uploadInput, "image");
})


const uploadImage = (uploadFile, uploadType) => {
  const [file] = uploadFile.files;
  if(file && file.type.includes("image")){
      const formdata = new FormData();
      formdata.append('image', file);

      fetch('/upload', {
          method: 'post',
          body: formdata
      }).then(res => res.json())
      .then(data => {
          if(uploadType == "image"){
              addImage(data, file.name);
          } else{
              bannerPath = `${location.origin}/${data}`;
              banner.style.backgroundImage = `url("${bannerPath}")`;
          }
      })
  } else{
      alert("upload Image only");
  }
}

const addImage = (imagepath, alt) => {
  let curPos = articleField.selectionStart;
  let textToInsert = `\r![${alt}](${imagepath})\r`;
  articleField.value = articleField.value.slice(0, curPos) + textToInsert + articleField.value.slice(curPos);
}


app.post('/upload', (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = 'public/uploads/' + imagename;

  // create upload
  file.mv(path, (err, result) => {
      if(err){
          throw err;
      } else{
          // our image upload path
          res.json(`uploads/${imagename}`)
      }
  })
})

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if(articleField.value.length && postTitleField.value.length){
        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let postTitle = postTitleField.value.split(" ").join("-");
        let id = '';
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // setting up docName
        let docName = `${postTitle}-${id}`;
        let date = new Date(); // for published at info

        //access firstore with db variable;
        db.collection("posts").doc(docName).set({
            title: postTitleField.value,
            article: articleField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() => {
            location.href = `/${docName}`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})
/*app.get("/:posts", (req, res) => {
  res.sendFile(path.join(initial_path, "posts.html"));
})

app.use((req, res) => {
  res.json("404");
})*/


  } //close of onInit*/


}
