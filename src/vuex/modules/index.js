/**
 */
import axios from 'axios'
import * as CommonConst from '../CommonConst'
import echarts from 'echarts'

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
    initChart({commit},{chartId}){
        let myChart = echarts.init(chartId);
        let option = {
            title:{
                text:'ECharts 数据统计'
            },
            tooltip:{},
            legend:{
                data:['用户来源']
            },
            xAxis:{
                data:["Android","IOS","PC","Ohter"]
            },
            yAxis:{

            },
            series:[{
                name:'访问量',
                type:'line',
                data:[500,200,360,100]
            }]
        };
        myChart.setOption(option);
    }
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
