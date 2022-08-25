import {instance} from "../utils/http";


export const getBaseData = () => instance.get('/test')