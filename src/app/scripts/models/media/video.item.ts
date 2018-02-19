import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

export class VideoItem {
    private _sanitizer: DomSanitizer;

    public title: string;
    public createdDate: Date;
    public url: string;
    public width: number;
    public height: number;

    constructor(sanitizer: DomSanitizer, title: string, url: string, createdDate: Date, width: number, height: number) {
        var self: VideoItem = this;

        self._sanitizer = sanitizer;

        self.title = title;
        self.createdDate = createdDate;
        self.url = url;
        self.width = width;
        self.height = height;
    }

    public getTrustedUrl(): SafeUrl {
        var self: VideoItem = this;
        return self._sanitizer.bypassSecurityTrustResourceUrl(self.url);
    }
}