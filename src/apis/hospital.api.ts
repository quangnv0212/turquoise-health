import http from "../utils/http"


const hospitalApi = {
  gethospitalList(params:any) {
    return http.get("",{params})
  }
}

export default hospitalApi
