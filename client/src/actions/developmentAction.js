/**
 * Created by Apple on 2018/5/27.
 */


export const ACTION_CODE ={
    GET_UI:"DEV_GET_UI",
};

const getUi = ui => ({
    type: ACTION_CODE.GET_UI,
    reactUi:ui
});

//获取活动宣传图页面列表数据
export const fetchGetUi = (ui) => dispatch => {
    dispatch(getUi(ui));
};