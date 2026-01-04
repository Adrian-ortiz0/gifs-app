import { Component, inject } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html', 
})
export default class SearchPage {

  gifService = inject(GifsService);

  onSearch(query: string){
    this.gifService.searchGifs(query);
  }
}