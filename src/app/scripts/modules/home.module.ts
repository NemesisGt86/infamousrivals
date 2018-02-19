import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ApplyToJoinComponent } from '../components/crew/applytojoin.component';
import { InfamousWantedComponent } from '../components/crew/infamouswanted.component';
import { MembersComponent } from '../components/crew/members.component';
import { PhotosComponent } from '../components/media/photos.component';
import { VideosComponent } from '../components/media/videos.component';
import { EventsComponent } from '../components/events/events.component';

const ApplicationRoutes = [
  { path: "applytojoin", component: ApplyToJoinComponent },
  { path: "infamouswanted", component: InfamousWantedComponent },
  { path: "members", component: MembersComponent },
  { path: "photos", component: PhotosComponent },
  { path: "videos", component: VideosComponent },
  { path: "events", component: EventsComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ApplyToJoinComponent,
    InfamousWantedComponent,
    MembersComponent,
    PhotosComponent,
    VideosComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ApplicationRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
