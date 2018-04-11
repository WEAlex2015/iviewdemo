<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>
                <div id="chart" ref="chart" style="width:600px; height: 400px;"></div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
           getStart: 'getStart',//demo
        }),
        data() {
            return {
                
            }
        },
        watch:{
          "getStart":function (val) {
                let me=this;
                console.info(val);
            },
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        },
        created() {
            let me = this;
            me.$nextTick(()=>{
              me.$store.dispatch('getStart');
              me.$store.dispatch('initChart',{chartId:me.$refs.chart});
            })
        }
    };
</script>