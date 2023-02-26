import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: {
    defaults: {
      cost: 3300000,
      percent: 13,
      term: 60,
      initialFee: 0,
      sumLeasing: 0,
      monthPay: 0,
    },

    min: {
      cost: 1000000,
      percent: 10,
      term: 1,
    },

    max: {
      cost: 6000000,
      percent: 60,
      term: 60,
    },

    bet: 0.035,
    out: {
      cost: false,
      percent: false,
      term: false,
      all: false,
    },
    url: "https://hookb.in/eK160jgYJ6UlaRPldJ1P",
    isLoading: false,
  },
  status: "idle",
};

export const sendData = createAsyncThunk(
  "data/sendData",
  async (data, { rejectWithValue }) => {
    const response = await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      data
    );
    if (!response.ok) {
      return rejectWithValue(response.data.message);
    }
    // console.log(response.data)
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setCost: (state, action) => {
      state.value.defaults.cost = action.payload;
    },
    setPercent: (state, action) => {
      state.value.defaults.percent = action.payload;
    },
    setTerm: (state, action) => {
      state.value.defaults.term = action.payload;
    },
    setInitialFee: (state) => {
      if (
        state.value.defaults.cost <= state.value.max.cost &&
        state.value.defaults.cost >= state.value.min.cost &&
        state.value.defaults.percent <= state.value.max.percent &&
        state.value.defaults.percent >= state.value.min.percent
      ) {
        state.value.defaults.initialFee = Math.round(
          state.value.defaults.cost * (state.value.defaults.percent / 100)
        );
      }
    },
    setMonthPay: (state) => {
      if (
        state.value.defaults.cost <= state.value.max.cost &&
        state.value.defaults.cost >= state.value.min.cost &&
        state.value.defaults.term <= state.value.max.term &&
        state.value.defaults.term >= state.value.min.term
      ) {
        state.value.defaults.monthPay = Math.round(
          (state.value.defaults.cost - state.value.defaults.initialFee) *
            ((state.value.bet *
              Math.pow(1 + state.value.bet, state.value.defaults.term)) /
              (Math.pow(1 + 0.035, state.value.defaults.term) - 1))
        );
      }
    },
    setSumLeasing: (state) => {
      if (
        state.value.defaults.term <= state.value.max.term &&
        state.value.defaults.term >= state.value.min.term
      ) {
        state.value.defaults.sumLeasing =
          state.value.defaults.initialFee +
          state.value.defaults.term * state.value.defaults.monthPay;
      }
    },
    setIsLoading: (state, action) => {
      state.value.isLoading = true;
    },
    setCostOut: (state, action) => {
      state.value.out.cost = action.payload;
    },
    setPercentOut: (state, action) => {
      state.value.out.percent = action.payload;
    },
    setTermOut: (state, action) => {
      state.value.out.term = action.payload;
    },
    setAllOut: (state) => {
      state.value.out.all = state.value.out.cost || state.value.out.percent || state.value.out.term;
    },
  },
  extraReducers: (builder) => {
    builder
      // Вызывается прямо перед выполнением запроса
      .addCase(sendData.pending, (state) => {
        state.value.isLoading = true;
        state.status = "loading";
      })
      // Вызывается в том случае если запрос успешно выполнился
      .addCase(sendData.fulfilled, (state) => {
        state.value.isLoading = false;
        state.status = "idle";
      })
      // Вызывается в случае ошибки
      .addCase(sendData.rejected, (state) => {
        state.value.isLoading = false;
        state.status = "error";
      });
  },
});

export const {
  setCost,
  setPercent,
  setTerm,
  setInitialFee,
  setMonthPay,
  setSumLeasing,
  setIsLoading,
  setCostOut,
  setPercentOut,
  setTermOut,
  setAllOut
} = counterSlice.actions;

export const selectSlider = (state) => state.slider.value;

export const selectSliderCurrents = (state) => state.slider.value.defaults;

export default counterSlice.reducer;
