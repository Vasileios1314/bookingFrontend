import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectApartments } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { fetchApartments, fetchApartmentById } from "./slice";

export const getApartments = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/apartments`);
      dispatch(fetchApartments({ apartment: response.data }));
      // console.log("res", response.data);
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const apartmentId = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/apartments/${id}`);
      dispatch(fetchApartmentById({ apartmentById: response.data }));
      // console.log("response.data", response.data);
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
};
