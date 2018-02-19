import { Component } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: '../../../views/events.component.html',
  styleUrls: ['../../../styles/events.component.css']
})
export class EventsComponent {
  private _youtubeVideos: Array<string>;

  constructor() {
      var self: EventsComponent = this;

      self._youtubeVideos = new Array<string>();
      self._youtubeVideos.push("https://www.youtube.com/watch?v=Avx0KyQU5dQ");
  }
}
