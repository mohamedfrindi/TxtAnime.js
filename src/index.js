import './scss/TxtAnime.scss';
import {
    TxtAnime,
} from "./js/TxtAnime";

if (typeof window !== 'undefined') {
    window.TxtAnime = TxtAnime;
}

export { TxtAnime }