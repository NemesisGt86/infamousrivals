import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

export class VideoItem {
    private _sanitizer: DomSanitizer;

    public title: string;
    public description: string;
    public createdDate: Date;
    public url: string;

    constructor(sanitizer: DomSanitizer, title: string, description: string, url: string, createdDate: Date) {
        var self: VideoItem = this;

        self._sanitizer = sanitizer;

        self.title = title;
        self.description = description;
        self.createdDate = createdDate;
        self.url = url;
    }

    public getTrustedUrl(): SafeUrl {
        var self: VideoItem = this;
        return self._sanitizer.bypassSecurityTrustResourceUrl(self.url);
    }
}