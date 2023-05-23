import {createAsyncThunk} from '@reduxjs/toolkit';
import {DetailsApi} from '../../services/details';

const fetchDetailsByProductId = createAsyncThunk(
    'details/fetchDetailsByProductId',
    async (productId, thunkAPI) => {
        const response = await DetailsApi.getDetailsByProductId(productId);
        return response.data;
    }
)

const fetchDeleteDetail = createAsyncThunk(
    'details/delete',
    async (id, thunkAPI) => {
        const response = await DetailsApi.deleteDetail(id);
        return response.data;
    }
)

const fetchUpdateDetail = createAsyncThunk(
    'details/update',
    async (updateData, thunkAPI) => {
        const response = await DetailsApi.updateDetail(updateData.detailsBody, updateData.detailsId);
        return response.data;
    }
)

const fetchCreateDetail = createAsyncThunk(
    'details/create',
    async (body, thunkAPI) => {
        const response = await DetailsApi.createDetail(body);
        return response.data;
    }
)

export {
    fetchDetailsByProductId, fetchDeleteDetail, fetchUpdateDetail, fetchCreateDetail
}