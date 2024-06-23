import IMovie from "./IMovie";
import IPaginationInfo from "./IPaginationInfo";

export default interface IMoviesPaginated extends IPaginationInfo {
  results?: IMovie[];
}
