import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";


export class GifMapper {
    static mapGiphyItemToGif(GiphyItem: GiphyItem) : Gif {
        return {
            id: GiphyItem.id,
            title: GiphyItem.title,
            url: GiphyItem.images.original.url,
        }
    }
    static mapGiphyItemsToGifArray(items: GiphyItem[]):Gif[]{
        return items.map(this.mapGiphyItemToGif);
    }
}