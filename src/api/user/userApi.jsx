import { axiosClient } from "../axiosCliesnt"

export async function getUserData() {
  return await axiosClient.get("admin/user/")
}
