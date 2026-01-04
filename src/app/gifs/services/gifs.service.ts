import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Giphy } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    searchedGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);
    searchedGifsLoading = signal(true);


    constructor(){
        this.loadTrendingGifs();
    }

    loadTrendingGifs(){
        this.http.get<Giphy>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 25,
            }
        }).subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
        })
    }

    searchGifs(query: string){
        this.http.get<Giphy>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                q: query
            }
        }).subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.searchedGifs.set(gifs);
            this.searchedGifsLoading.set(false);
        })
    }
}