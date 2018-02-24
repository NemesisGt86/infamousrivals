import { Component } from '@angular/core';
import { GalleryModule } from  '@ngx-gallery/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'photos',
  templateUrl: '../../../views/photos.component.html',
  styleUrls: ['../../../styles/photos.component.css']
})
export class PhotosComponent {
    //https://murhafsousli.github.io/ngx-gallery/#/basic
  private _galleryItems: Array<GalleryItem>;
}
