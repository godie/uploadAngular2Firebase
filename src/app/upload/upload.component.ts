import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

	folder:string = ""

  constructor(private firebaseApp:FirebaseApp) { }

  ngOnInit() {
  }

 upload(){
    let storageRef = this.firebaseApp.storage().ref();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
        
        let path = `/${this.folder}/${selectedFile.name}`;
        var iRef = storageRef.child(path);
        console.log(path);
        iRef.put(selectedFile).then((snapshot) => {
          console.log('Uploaded a blob or file! Now storing the reference at', `/logos/${selectedFile.name}`);
          //this.firebaseDB.list('/logos/').push({path:path,filename:selectedFile.name});
        });
    }
  }

}
