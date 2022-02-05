import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const findMissions = createAsyncThunk(
  "missions/findMissions",
  async (filters) => {
    console.log(filters);

    const requestAddress = "https://api.spaceXdata.com/v3/launches";
    try {
      const response = await axios.get(requestAddress, {
        params: { ...filters, limit: 100 },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error);
      }

      return Promise.reject(
        `ERROR received from ${requestAddress}: ${error}\n`
      );
    }
  }
);
