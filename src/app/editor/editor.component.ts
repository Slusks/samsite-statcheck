import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
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
  let curPos = articleFeild.selectionStart;
  let textToInsert = `\r![${alt}](${imagepath})\r`;
  articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
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


  } //close of onInit


}
