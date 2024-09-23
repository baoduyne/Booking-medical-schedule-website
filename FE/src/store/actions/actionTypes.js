const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE:"CHANGE_LANGUAGE",
    //admin
    ADMIN_LOGIN_SUCCESS: 'ADMIN_LOGIN_SUCCESS',
    ADMIN_LOGIN_FAIL: 'ADMIN_LOGIN_FAIL',


    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL:"USER_LOGIN_FAIL",
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
    FETCH_ALLCODE_START : "FETCH_ALLCODE_START",
    FETCH_ALLCODE_SUCCESS :"FETCH_ALLCODE_SUCCESS",
    FETCH_ALLCODE_FAIL : "FETCH_ALLCODE_FAIL",

    SAVE_USER_SUCCESS : 'SAVE_USER_SUCCESS ' ,
    SAVE_USER_FAIL : 'SAVE_USER_FAIL',

    FETCH_USERS_START : 'FETCH_USERS_START',
    FETCH_USERS_SUCCESS : 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAIL : 'FETCH_USERS_FAIL',
    DELETE_USER_START : 'DELETE_USER_START',
    DELETE_USER_SUCCESS : 'DELETE_USER_SUCCESS',
    DELETE_USER_FAIL : 'DELETE_USER_FAIL',

    EDIT_USER_START : 'EDIT_USER_START',
    EDIT_USER_SUCCESS : 'EDIT_USER_SUCCESS',
    EDIT_USER_FAIL : 'EDIT_USER_FAIL',
    FETCH_TOP_DOCTORS_START : 'FETCH_TOP_DOCTORS_START',
    FETCH_TOP_DOCTORS_SUCCESS : 'FETCH_TOP_DOCTORS_SUCCESS',
    FETCH_TOP_DOCTORS_FAIL : 'FETCH_TOP_DOCTORS_FAIL',

    GET_ALL_DOCTORS_START : 'GET_ALL_DOCTORS_START',
    GET_ALL_DOCTORS_SUCCESS : 'GET_ALL_DOCTORS_SUCCESS',
    GET_ALL_DOCTORS_FAIL  : 'GET_ALL_DOCTORS_FAIL'
})

export default actionTypes;