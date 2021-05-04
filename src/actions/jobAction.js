import axios from "axios";
import { JOB_DETAILS_FAIL, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_LIST_FAIL, JOB_LIST_REQUEST, JOB_LIST_SUCCESS } from "../constants/jobsConstants"

export const jobListAction = (description) => async(dispatch) => {
    try{
        dispatch({
            type:JOB_LIST_REQUEST
        });

        console.log(`/positions.json?description=${description}`)
        const {data} = await axios.get(`/positions.json?description=${description}`);

        dispatch({
            type:JOB_LIST_SUCCESS,
            payload:data
        })
    }catch(err){
        dispatch({
            type:JOB_LIST_FAIL,
            payload:err.message
        })
    };
};


export const jobDetailsAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type:JOB_DETAILS_REQUEST
        });


        console.log(`positions/${id}.json`)

        const {data} = await axios.get(`/positions/${id}.json`);

        console.log(data)

        dispatch({
            type:JOB_DETAILS_SUCCESS,
            payload:data
        })
    }catch(err){
        dispatch({
            type:JOB_DETAILS_FAIL,
            payload:err.message
        })
    };
};