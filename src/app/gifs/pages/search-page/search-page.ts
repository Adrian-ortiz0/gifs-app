import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html', 
})
export default class SearchPage {

  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string){
    this.gifService.searchGifs(query)
    .subscribe((resp) => {
      this.gifs.set(resp);
    })
  }
}