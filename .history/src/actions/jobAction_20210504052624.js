import axios from "axios";
import { JOB_LIST_REQUEST } from "../constants/jobsConstants"

const jobListAction = (description) => async(dispatch) => {
    dispatch({
        type:JOB_LIST_REQUEST
    });

    const {data} = await axios.get('');
}