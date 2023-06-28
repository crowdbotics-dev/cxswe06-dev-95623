import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_zaqw_list = createAsyncThunk(
  "zaqws/api_v1_zaqw_list",
  async payload => {
    const response = await apiService.api_v1_zaqw_list(payload)
    return response.data
  }
)
export const api_v1_zaqw_create = createAsyncThunk(
  "zaqws/api_v1_zaqw_create",
  async payload => {
    const response = await apiService.api_v1_zaqw_create(payload)
    return response.data
  }
)
export const api_v1_zaqw_retrieve = createAsyncThunk(
  "zaqws/api_v1_zaqw_retrieve",
  async payload => {
    const response = await apiService.api_v1_zaqw_retrieve(payload)
    return response.data
  }
)
export const api_v1_zaqw_update = createAsyncThunk(
  "zaqws/api_v1_zaqw_update",
  async payload => {
    const response = await apiService.api_v1_zaqw_update(payload)
    return response.data
  }
)
export const api_v1_zaqw_partial_update = createAsyncThunk(
  "zaqws/api_v1_zaqw_partial_update",
  async payload => {
    const response = await apiService.api_v1_zaqw_partial_update(payload)
    return response.data
  }
)
export const api_v1_zaqw_destroy = createAsyncThunk(
  "zaqws/api_v1_zaqw_destroy",
  async payload => {
    const response = await apiService.api_v1_zaqw_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const zaqwsSlice = createSlice({
  name: "zaqws",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_zaqw_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zaqw_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zaqw_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zaqw_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zaqw_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zaqw_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zaqw_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zaqw_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_zaqw_list,
  api_v1_zaqw_create,
  api_v1_zaqw_retrieve,
  api_v1_zaqw_update,
  api_v1_zaqw_partial_update,
  api_v1_zaqw_destroy,
  slice: zaqwsSlice
}
