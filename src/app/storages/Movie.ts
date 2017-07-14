
export class Movie {

  private _id : number;
  private _title: string;
  private _genresId: number[];
  private _desc: string;
  private _image: string;
  private _vote: number;
  private _voteCount: number;
  private _releaseDate: number;
  private _length: number;
  private _country: string[];
  private _language: string;
  private _companies: string[];


  constructor(id: number, title: string, genresId: number[], desc: string, image: string, vote: number, voteCount: number, releaseDate: number, length: number, country: string[], language: string, companies: string[]) {
    this._id = id;
    this._title = title;
    this._genresId = genresId;
    this._desc = desc;
    this._image = image;
    this._vote = vote;
    this._voteCount = voteCount;
    this._releaseDate = releaseDate;
    this._length = length;
    this._country = country;
    this._language = language;
    this._companies = companies;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get genresId(): number[] {
    return this._genresId;
  }

  set genresId(value: number[]) {
    this._genresId = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get vote(): number {
    return this._vote;
  }

  set vote(value: number) {
    this._vote = value;
  }

  get voteCount(): number {
    return this._voteCount;
  }

  set voteCount(value: number) {
    this._voteCount = value;
  }

  get releaseDate(): number {
    return this._releaseDate;
  }

  set releaseDate(value: number) {
    this._releaseDate = value;
  }

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }

  get country(): string[] {
    return this._country;
  }

  set country(value: string[]) {
    this._country = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get companies(): string[] {
    return this._companies;
  }

  set companies(value: string[]) {
    this._companies = value;
  }
}
