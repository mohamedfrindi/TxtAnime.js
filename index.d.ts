declare module 'txtanime.js' {
  interface TxtAnimeOptions {
    /**
     * @default 'txt-an-1'
     */
    effect?: 'txt-an-1' | 'txt-an-2' | 'txt-an-3' | 'txt-an-4' | 'txt-an-5' | 'txt-an-6' | 'txt-an-7' | 'txt-an-8' | 'txt-an-9',
    /**
     * @default 0
     */
    delayStart?: number,
    /**
     * @default 0.07
     */
    delay?: number,
    /**
     * @default 0.7
     */
    duration?: number,
    /**
     * @default true
     */
    repeat?: boolean,
    /**
     * @default 2
     */
    repeatDelay?: number,
    /**
     * @default false
     */
    out?: number | boolean,
    text?: any[],
    overlayBackground?: string
  }
  export class TxtAnime {
    constructor(element: string | HTMLElement,options: TxtAnimeOptions);
  }
}