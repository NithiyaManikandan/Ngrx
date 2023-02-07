import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostServiceService {
  constructor(private http: HttpClient) {}
  getAllUser() {
    return this.http.get("http://localhost:3000/user/getAllUser");
  }

  deleteUserData(id: string) {
    return this.http.delete(`http://localhost:3000/user/deleteUser/${id}`);
  }

  updateUserData(post: any, id: string) {
    return this.http.put(`http://localhost:3000/user/updateUser/${id}`, post);
  }

  postData(post: any) {    
    return this.http.post("http://localhost:3000/user/userDetail", post);
  }
  login(post : any){
    return this.http.post('http://localhost:3000/user/login',post)
  }
}
