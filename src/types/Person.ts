export interface Person {
  // id?: Key | null | undefined;
  name: string,
  sex: 'm' | 'f',
  born: number,
  died: number,
  fatherName: string | null,
  motherName: string | null,
  slug: string,
}