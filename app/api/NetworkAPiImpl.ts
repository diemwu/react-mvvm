/*
 * Copyright (c) 2023 Arbaz Pirwani
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import axios from "axios";
import { Users } from "../interfaces/user";
import { Response } from "../models/api/ApiResponseState";
import { APIService } from "./APIService";

import NetworkApi from "./NetworkApi";

// import NetworkApi from "data/network/NetworkApi";
// import {Response} from "data/api/Response";
// import {ApiService} from "data/api/ApiService";
// import {API_ENDPOINTS} from "data/constant/ApiConstants";
// import {BookApiEntity, BookItemApiEntity} from "data/entity/interfaces/BookApiEntityInterfaces";

export default class NetworkApiImpl implements NetworkApi {
  apiService: APIService;

  constructor() {
    this.apiService = new APIService(axios.create());
  }
  getUserQuery(): Promise<Response<Users>> {
    console.log("getUserQuery");
    return this.apiService.get<Users>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
