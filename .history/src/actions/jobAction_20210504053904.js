import axios from "axios";
import { JOB_DETAILS_FAIL, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_LIST_FAIL, JOB_LIST_REQUEST, JOB_LIST_SUCCESS } from "../constants/jobsConstants"

const jobListAction = (description) => async(dispatch) => {
    try{
        dispatch({
            type:JOB_LIST_REQUEST
        });

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


const jobDetailsAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type:JOB_DETAILS_REQUEST
        });

        const {data} = await axios.get(`positions/${id}.json?markdown=true`);

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