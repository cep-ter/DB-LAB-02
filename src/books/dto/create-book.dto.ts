export class CreateBookDto {
  readonly name: string;
  readonly userID: number;
  readonly genreIDs: number[];
}
