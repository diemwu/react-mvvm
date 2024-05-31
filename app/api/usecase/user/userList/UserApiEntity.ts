import { User, Users } from "@/app/interfaces/user";

export const fromAPIEntityToTarget = (apiResponse: Users): Users => {
  return apiResponse.map((user) => fromAPIEntityToTargetItem(user));
};

const fromAPIEntityToTargetItem = (UserListItemApiEntity: User): User => ({
  id: UserListItemApiEntity.id,
  name: UserListItemApiEntity.name,
  email: UserListItemApiEntity.email,
});
