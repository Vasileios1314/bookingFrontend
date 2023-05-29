import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectApartment, selectApartments } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import {
  fetchApartments,
  fetchApartmentById,
  addRating,
  addComment,
} from "./slice";
import { selectToken, selectUser } from "../user/selectors";

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

export const postRatingAction = (newValue) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    const { id } = selectUser(getState());
    const { id: apartmentId } = selectApartment(getState());
    console.log("newValue", id);
    dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/apartments/newRating/`,
        {
          apartmentId: apartmentId,
          rating: newValue,
          userId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Thanks for the review!!",
          3000
        )
      );
      dispatch(addRating({ apartmentId, rating: newValue }));
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch(showMessageWithTimeout("danger", false, e.response.data, 3000));
      dispatch(appDoneLoading());
    }
  };
};

export const postCommentAction = (newComment) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    const { id } = selectUser(getState());
    const { id: apartmentId } = selectApartment(getState());

    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/apartments/newComment/`,
        {
          apartmentId: apartmentId,
          comment: newComment,
          userId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Thanks for the review!!",
          3000
        )
      );
      dispatch(addComment({ apartmentId, comment: newComment }));
      dispatch(appDoneLoading());
    } catch (e) {
      dispatch(showMessageWithTimeout("danger", false, e.response.data, 3000));
      dispatch(appDoneLoading());
    }
  };
};
