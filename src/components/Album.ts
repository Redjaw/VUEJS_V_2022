export interface Album {
    name: string
    author: Author
    year: string | number
    duration: string | number
    cover: string
    link?: string
}

export interface Author {
    name: string
    band?: Band
    link?: string
}

export interface Band {
    voice?: string
    guitar?: string
    guitar2?: string
    bass?: string
    drums?: string
    keyboards?: string
}