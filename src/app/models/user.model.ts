import { MagazineModel } from './magazine.model';
import { AddressModel } from './address.model';

export class UserModel {

  private id: number;
  private name: string;
  private lastName: string;
  private thumbnail: string;
  private boardSignature: string;
  private email: string;
  private pass: string;
  private birthdate: string;
  private addresses: Array<AddressModel>;
  private sliderMagazines: Array<string>;
  private viewedMagazines: Array<string>;
  private likedMagazines: Array<string>;
  private recommendedMagazines: Array<string>;
  private cart: Array<string>;
  private downloadedMagazines: Array<string>;

  constructor( id?: number,
               email?: string,
               pass?: string,
               name?: string,
               lastName?: string,
               thumbnail?: string,
               boardSignature?: string,
               birthdate?: string,
               addresses?: Array<AddressModel>,
               sliderMagazines?: Array<string>,
               viewedMagazines?: Array<string>,
               likedMagazines?: Array<string>,
               recommendedMagazines?: Array<string>,
               cart?: Array<string>,
               downloadedMagazines?: Array<string>,

                ) {
    this.id = id;
    this.email = email;
    this.pass = pass;
    name === undefined ? this.name = '' : this.name = name ;
    lastName === undefined ? this.lastName = '' : this.lastName = lastName ;
    thumbnail === undefined ? this.thumbnail = '/assets/userProfileImages/userprofileImageExample.png' : this.thumbnail = thumbnail ;
    boardSignature === undefined ? this.boardSignature = '' : this.boardSignature = boardSignature ;
    birthdate === undefined ? this.birthdate = '' : this.birthdate = birthdate ;
    addresses === undefined ? this.addresses = [] : this.addresses = addresses ;
    sliderMagazines === undefined ? this.sliderMagazines = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] : this.sliderMagazines = viewedMagazines ;
    viewedMagazines === undefined ? this.viewedMagazines = [] : this.viewedMagazines = viewedMagazines ;
    likedMagazines === undefined ? this.likedMagazines = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'] : this.likedMagazines = likedMagazines ;
    recommendedMagazines === undefined ? this.recommendedMagazines = ['21', '22', '23', '24', '25', '26', '27', '28', '29', '10'] : this.recommendedMagazines = recommendedMagazines;
    cart === undefined ? this.cart = [] : this.cart = cart ;
    downloadedMagazines === undefined ? this.downloadedMagazines = [] : this.downloadedMagazines = downloadedMagazines; }

  public get Id(): number {
    return this.id;
  }

  public set Id(value: number) {
    this.id = value;
  }

  public get Name(): string {
    return this.name;
  }

  public set Name(value: string) {
    this.name = value;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public set LastName(value: string) {
    this.lastName = value;
  }

  public get BoardSignature(): string {
    return this.boardSignature;
  }

  public set BoardSignature(value: string) {
    this.boardSignature = value;
  }

  public get Email(): string {
    return this.email;
  }

  public set Email(value: string) {
    this.email = value;
  }

  public get Pass(): string {
    return this.pass;
  }

  public set Pass(value: string) {
    this.pass = value;
  }

  public get Thumbnail(): string {
    return this.thumbnail;
  }

  public set Thumbnail(value: string) {
    this.pass = value;
  }

  public get Birthdate(): string {
    return this.birthdate;
  }

  public set Birthdate(value: string) {
    this.birthdate = value;
  }

  public get Addresses(): Array<AddressModel> {
    return this.addresses;
  }

  public set Addresses(value: Array<AddressModel>) {
    this.addresses = value;
  }

  public get SliderMagazines(): Array<string> {
    return this.sliderMagazines;
  }

  public set SliderMagazines(value: Array<string>) {
    this.sliderMagazines = value;
  }

  public get ViewedMagazines(): Array<string> {
    return this.viewedMagazines;
  }

  public set ViewedMagazines(value: Array<string>) {
    this.viewedMagazines = value;
  }


  public get LikedMagazines(): Array<string> {
    return this.likedMagazines;
  }

  public set LikedMagazines(value: Array<string>) {
    this.likedMagazines = value;
  }

  public get RecommendedMagazines(): Array<string> {
    return this.recommendedMagazines;
  }

  public set RecommendedMagazines(value: Array<string>) {
    this.recommendedMagazines = value;
  }

  public get Cart(): Array<string> {
    return this.cart;
  }

  public set Cart(value: Array<string>) {
    this.cart = value;
  }

  public get DownloadedMagazines(): Array<string> {
    return this.downloadedMagazines;
  }

  public set DownloadedMagazines(value: Array<string>) {
    this.downloadedMagazines = value;
  }
}
