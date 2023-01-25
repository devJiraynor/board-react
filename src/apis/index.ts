import axios from "axios";

export const signInApi = async (data: any) => {
    const response = await axios.post("http://localhost:4000/api/auth/signIn", data).catch((error) => null);
    if (!response) return null;

    const result = response.data;
    return result;
}

export const signUpApi = async (data: any) => {
    const response = await axios.post("http://localhost:4000/api/auth/signUp", data).catch((error) => null);
    if (!response) return null;

    const result = response.data;
    return result;
}