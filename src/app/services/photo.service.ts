import {Injectable} from '@angular/core';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';

const {Camera, Filesystem, Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor() {
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
    });
  }


}


interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
