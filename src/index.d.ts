export interface Post {
    id: number
    title: string
    body: string
}

export declare function getPosts(): Promise<Post[]>
