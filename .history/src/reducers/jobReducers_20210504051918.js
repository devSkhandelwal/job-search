import { JOB_LIST_REQUEST } from "../constants/jobsConstants";

export const jobListReducer = (state={jobs:[]},action) => {
    switch(action.type){
        case JOB_LIST_REQUEST:
            return {loading:true}
    }
}