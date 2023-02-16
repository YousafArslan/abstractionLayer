import { PHYSICIAN_GROUP } from "../actions/utilities";

const INITIAL_STATE = {
  addPhysicianGroupLoading: false,
  addPhysicianGroupSuccess: false,
  addPhysicianGroupFailure: false,
  addPhysicianGroupError: null,

  getAllPhysicianGroupLoading: false,
  getAllPhysicianGroupSuccess: false,
  getAllPhysicianGroupFailure: false,
  getAllPhysicianGroupError: null,
  getAllPhysicianGroupList: [],

  getSinleGroupLoading: false,
  getSinleGroupSuccess: false,
  getSinleGroupFailure: false,
  getSinleGroupError: null,
  getSinleGroupList: [],
};

export const physicianGroupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_REQUEST:
      return {
        ...state,
        addPhysicianGroupLoading: true,
        addPhysicianGroupSuccess: false,
        addPhysicianGroupFailure: false,
        addPhysicianGroupError: null,
      };
    case PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_SUCCESS:
      return {
        ...state,
        addPhysicianGroupLoading: false,
        addPhysicianGroupSuccess: true,
        addPhysicianGroupFailure: false,
        addPhysicianGroupError: null,
      };
    case PHYSICIAN_GROUP.ADD_PHYSICIAN_GROUP_FAILURE:
      return {
        ...state,
        addPhysicianGroupLoading: false,
        addPhysicianGroupSuccess: false,
        addPhysicianGroupFailure: true,
        addPhysicianGroupError: action.payload,
      };
    case PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_REQUEST:
      return {
        ...state,
        getAllPhysicianGroupLoading: true,
        getAllPhysicianGroupSuccess: false,
        getAllPhysicianGroupFailure: false,
        getAllPhysicianGroupError: null,
      };
    case PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_SUCCESS:
      return {
        ...state,
        getAllPhysicianGroupLoading: false,
        getAllPhysicianGroupSuccess: true,
        getAllPhysicianGroupFailure: false,
        getAllPhysicianGroupError: null,
        getAllPhysicianGroupList: action.payload,
      };
    case PHYSICIAN_GROUP.GETALL_PHYSICIAN_GROUP_FAILURE:
      return {
        ...state,
        getAllPhysicianGroupLoading: false,
        getAllPhysicianGroupSuccess: false,
        getAllPhysicianGroupFailure: true,
        getAllPhysicianGroupError: action.payload,
      };
    case PHYSICIAN_GROUP.GETSINGLE_GROUP_REQUEST:
      return {
        ...state,
        getSingleGroupLoading: true,
        getSingleGroupSuccess: false,
        getSingleGroupFailure: false,
        getSingleGroupError: null,
        getSingleGroupList: [],
      };
    case PHYSICIAN_GROUP.GETSINGLE_GROUP_SUCCESS:
      return {
        ...state,
        getSingleGroupLoading: false,
        getSingleGroupSuccess: true,
        getSingleGroupFailure: false,
        getSingleGroupError: null,
        getSingleGroupList: action.payload,
      };
    case PHYSICIAN_GROUP.GETSINGLE_GROUP_FAILURE:
      return {
        ...state,
        getSingleGroupLoading: false,
        getSingleGroupSuccess: false,
        getSingleGroupFailure: true,
        getSingleGroupList: action.payload,
      };

    default:
      return state;
  }
};
