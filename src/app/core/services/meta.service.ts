import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  set(meta) {
    this.titleService.setTitle(meta.title);
    this.meta.updateTag({name: 'description', content: meta.description});
    this.meta.updateTag({name: 'og:image', content: meta.image});
  }
}
