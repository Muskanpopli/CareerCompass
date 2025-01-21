// // export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
// // export const JOB_API_END_POINT="http://localhost:8000/api/v1/job";
// // export const APPLICATION_API_END_POINT="http://localhost:8000/api/v1/application";
// // export const COMPANY_API_END_POINT="http://localhost:8000/api/v1/company";

// export const USER_API_END_POINT="https://jobportal-fas2.onrender.com/api/v1/user";
// export const JOB_API_END_POINT="https://jobportal-fas2.onrender.com/api/v1/job";
// export const APPLICATION_API_END_POINT="https://jobportal-fas2.onrender.com/api/v1/application";
// export const COMPANY_API_END_POINT="https://jobportal-fas2.onrender.com/api/v1/company";

const ENV = process.env.NODE_ENV || "development"; 
const API_BASE_URL =
  ENV === "development"
    ? "http://localhost:8000/api/v1"
    : "https://jobportal-fas2.onrender.com/api/v1";

export const USER_API_END_POINT = `${API_BASE_URL}/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/company`;
