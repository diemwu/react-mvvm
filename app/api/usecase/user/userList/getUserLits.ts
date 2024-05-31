import { Users } from "@/app/interfaces/user";
import { ResponseState, State } from "@/app/models/api/ResponseState";
import NetworkApi from "../../../NetworkApi";
import { fromAPIEntityToTarget } from "./UserApiEntity";
import NetworkApiImpl from "@/app/api/NetworkAPiImpl";

interface GetUserUseCase {
  invoke: (id: string) => Promise<ResponseState<Users>>;
}

export class GetUserListUseCase implements GetUserUseCase {
  apiProcess: NetworkApiImpl;

  constructor() {
    this.apiProcess = new NetworkApiImpl();
  }

  async invoke(): Promise<ResponseState<Users>> {
    try {
      let response = await this.apiProcess.getUserQuery();
      if (response.isSuccessful) {
        return {
          responseState: State.Success,
          data: fromAPIEntityToTarget(response.body!),
        };
      }
      return { responseState: State.Fail, error: response.errorBody! };
    } catch (error) {
      return { responseState: State.Error };
    }
  }
}
