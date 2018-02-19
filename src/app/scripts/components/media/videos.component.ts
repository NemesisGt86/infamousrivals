import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { VideoItem } from '../../models/media/video.item';

@Component({
  selector: 'videos',
  templateUrl: '../../../views/videos.component.html',
  styleUrls: ['../../../styles/videos.component.css']
})
export class VideosComponent {
    private _youtubeVideos: Array<VideoItem>;

  constructor(sanitizer: DomSanitizer) {
      var self: VideosComponent = this;

      self._youtubeVideos = new Array<VideoItem>();
      self._youtubeVideos.push(new VideoItem(sanitizer, "Rise of Infamous Rivals | First run", "https://www.youtube.com/embed/Avx0KyQU5dQ", new Date(2018, 2, 11), 560, 315));
  }
}
