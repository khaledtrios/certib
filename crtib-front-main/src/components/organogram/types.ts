export type OrganogramEmployee = {
  id: string;
  name: string;
  photoUrl?: string | null;
  role?: string;
  children?: OrganogramEmployee[];
};
