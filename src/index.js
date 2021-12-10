import './main.scss'
import { TxtAnime } from "./js/TxtAnime";

if (typeof window !== 'undefined') {
    window.TxtAnime = TxtAnime;
}

export { TxtAnime }