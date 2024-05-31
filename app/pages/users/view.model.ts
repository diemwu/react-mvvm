import React, { useCallback, useMemo, useState } from "react";
import { UsersViewModel } from "./models";
import { Users } from "@/app/interfaces/user";
import { GetUserListUseCase } from "@/app/api/usecase/user/userList/getUserLits";
import { ResponseState, State } from "@/app/models/api/ResponseState";
import { Response } from "@/app/models/api/ApiResponseState";

function useUserViewModel(): UsersViewModel {
  const [userListRes, setUserListRes] = useState<ResponseState<Users>>({
    responseState: State.Loading,
  });

  const getUsersByQuery = useCallback(() => {
    (async () => {
      const getUserList = new GetUserListUseCase();

      getUserList.invoke().then((res) => {
        setUserListRes(res);
      });
    })();
  }, []);

  const users = useMemo((): Users => {
    if (userListRes.responseState === State.Success && userListRes.data) {
      return userListRes.data;
    }
    return [];
  }, [userListRes]);

  const pageState = useMemo(() => {
    return userListRes.responseState;
  }, [userListRes]);

  return {
    users,
    getUsersByQuery,
  };
}

export default useUserViewModel;
