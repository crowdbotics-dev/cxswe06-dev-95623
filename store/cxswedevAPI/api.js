import axios from "axios"
const cxswedevAPI = axios.create({
  baseURL: "https://cxswe06-dev-95623.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cxswedevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return cxswedevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return cxswedevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_zaqw_list(payload) {
  return cxswedevAPI.get(`/api/v1/zaqw/`)
}
function api_v1_zaqw_create(payload) {
  return cxswedevAPI.post(`/api/v1/zaqw/`, payload.data)
}
function api_v1_zaqw_retrieve(payload) {
  return cxswedevAPI.get(`/api/v1/zaqw/${payload.id}/`)
}
function api_v1_zaqw_update(payload) {
  return cxswedevAPI.put(`/api/v1/zaqw/${payload.id}/`, payload.data)
}
function api_v1_zaqw_partial_update(payload) {
  return cxswedevAPI.patch(`/api/v1/zaqw/${payload.id}/`, payload.data)
}
function api_v1_zaqw_destroy(payload) {
  return cxswedevAPI.delete(`/api/v1/zaqw/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return cxswedevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return cxswedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cxswedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cxswedevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return cxswedevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cxswedevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return cxswedevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return cxswedevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return cxswedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cxswedevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return cxswedevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_zaqw_list,
  api_v1_zaqw_create,
  api_v1_zaqw_retrieve,
  api_v1_zaqw_update,
  api_v1_zaqw_partial_update,
  api_v1_zaqw_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
