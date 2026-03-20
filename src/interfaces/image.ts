//definir la forma de cada imagen
export interface Image {
    id: number | string;
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    title?: string;
    description?: string;
}

export interface GalleryImages {
    images: Image[];
    title?: string;
    description?: string;
}