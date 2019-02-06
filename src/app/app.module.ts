import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderMobileComponent } from './layout/header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './layout/header/header-desktop/header-desktop.component';
import { MapComponent } from './shared/map/map.component';
import { HomeComponent  } from './pages/home/home.component';
import { VideoComponent } from './shared/video/video.component';
import { SearchModalComponent } from './shared/modals/search-modal/search-modal.component';
import { LinesComponent } from './layout/lines/lines.component';

import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    MapComponent,
    VideoComponent,
    SearchModalComponent,
    LinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BootstrapModalModule.forRoot({container: document.body}),
    SharedModule
  ],
  providers: [
  ],
  entryComponents: [
    SearchModalComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
