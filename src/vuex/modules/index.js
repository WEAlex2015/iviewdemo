/**
 */
import axios from 'axios'
import * as CommonConst from '../CommonConst'

const state = {
    getStart: '',
};

const getters = {
    getStart: state => state.getStart,
};

const actions = {
    getStart({commit}) {
        axios.get(CommonConst.GET_START_URL)
            .then(resData => {
                let commitData = resData;
                commit(CommonConst.GET_START, {resData: commitData});
            })
            .catch(e => {
                commit(CommonConst.GET_START, {resData: 'error'});
            });
    },
};

const mutations = {
    [CommonConst.GET_START](state, {resData}) {
        state.getStart = resData;
    },
};

export default {
    state,
    actions,
    getters,
    mutations
}
