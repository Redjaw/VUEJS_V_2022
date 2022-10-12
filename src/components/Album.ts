export interface IAlbum{
    name: string
    author: IAuthor
    year: string | number
    duration: string | number
    cover: string
    link: string | undefined
}

export interface IAuthor {
    name: string
    band: IBand | undefined
    link: string | undefined
}

export interface IBand{
    voice?: string
    guitar?: string
    guitar2?: string
    bass?: string
    drums?: string
    keyboards?: string
}