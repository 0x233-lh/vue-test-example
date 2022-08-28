import {instance} from "../utils/http";


export const getBaseData = () => instance.get('/test')

export const getBaseData2 = () => instance.get('/mock')