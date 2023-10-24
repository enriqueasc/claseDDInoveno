import { ENV } from "../utils/constants"

async function register(email, username, password) {
  try {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.REGISTER}`
    console.log(url)
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    }
    const response = await fetch(url, params)
    if (response.status !== 200) throw response
    return response.json()
  } catch (error) {
    throw error
  }
}

async function login(identiier, password) {
  try {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.LOGIN}`
    console.log(url)
    console.log(identiier, password)
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identiier,
        password: password,
      }),
    }
    const response = await fetch(url, params)
    if (response.status !== 200) throw response
    return response.json()
  } catch (error) {
    console.error("error")
    throw error
  }
}

export const authApi = {
  register,
  login,
}
