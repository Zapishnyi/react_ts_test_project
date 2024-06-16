import IMovie from "./IMovie";

export default interface IMoviesPaginated {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number,
}