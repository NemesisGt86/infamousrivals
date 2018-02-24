import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular5-social-login";

import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ApplyToJoinComponent } from '../components/crew/applytojoin.component';
import { InfamousWantedComponent } from '../components/crew/infamouswanted.component';
import { MembersComponent } from '../components/crew/members.component';
import { PhotosComponent } from '../components/media/photos.component';
import { VideosComponent } from '../components/media/videos.component';
import { EventsComponent } from '../components/events/events.component';
import { AccountComponent } from '../components/account/account.component';


export function getApplicationRouting(): Array<any> {
  return [
    { path: "applytojoin", component: ApplyToJoinComponent },
    { path: "infamouswanted", component: InfamousWantedComponent },
    { path: "members", component: MembersComponent },
    { path: "photos", component: PhotosComponent },
    { path: "videos", component: VideosComponent },
    { path: "events", component: EventsComponent }
  ];
}

export function getSocialMediaAccountConfigurations(): AuthServiceConfig {
  return new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("1714748668571876")
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("474063251979-i38i42a0ln655pulv7jd9mpeg8u0uso0.apps.googleusercontent.com")
    },
  ]);
}

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ApplyToJoinComponent,
    InfamousWantedComponent,
    MembersComponent,
    PhotosComponent,
    VideosComponent,
    EventsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(getApplicationRouting()),
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getSocialMediaAccountConfigurations
  }],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
