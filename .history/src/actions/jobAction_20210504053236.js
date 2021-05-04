import axios from "axios";
import { JOB_LIST_FAIL, JOB_LIST_REQUEST, JOB_LIST_SUCCESS } from "../constants/jobsConstants"

const jobListAction = (description) => async(dispatch) => {
    try{
        dispatch({
            type:JOB_LIST_REQUEST
        });

        const {data} = await axios.get('');

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


const jobDetailsAction = (description) => async(dispatch) => {
    try{
        dispatch({
            type:JOB_LIST_REQUEST
        });

        const {data} = await axios.get('');

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