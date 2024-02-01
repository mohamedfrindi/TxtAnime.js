declare module 'txtanime.js' {
  interface TxtAnimeOptions {
    effect: 'txt-an-1' | 'txt-an-2' | 'txt-an-3' | 'txt-an-4' | 'txt-an-5' | 'txt-an-6' | 'txt-an-7' | 'txt-an-8' | 'txt-an-9',
    delayStart?: number,
    delay?: number,
    duration?: number,
    repeat?: number,
    repeatDelay?: number,
    out?: number | boolean,
    text?: any[],
    overlayBackground?: string
  }
  export class TxtAnime {
    constructor(element: string | HTMLElement,options: TxtAnimeOptions);
  }
}