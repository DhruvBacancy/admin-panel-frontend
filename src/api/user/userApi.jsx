import { axiosClient } from "../axiosCliesnt"

export async function getUserData() {
  return await axiosClient.get("admin/user/")
}

export async function deleteUser(userId) {
  return await axiosClient.delete(`admin/user/delete/${userId}`)
}
