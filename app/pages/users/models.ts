import { Users } from "@/app/interfaces/user";

export interface UsersViewModel {
  users: Users;
  getUsersByQuery: () => void;
}
