import axios from 'axios';

export const carsAction = () => {
    return async (dispatch) => {
        const {data} = await axios.get(
            `https://rent-cars-api.herokuapp.com/admin/car`,
        );
        dispatch({
            type: "SET_CARS",
            payload: data
        })
    }
}
