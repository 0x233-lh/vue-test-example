import { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: '/mock',
        method: 'get',
        response: () => {
            return [
                {
                    type: 'mock',
                    value: '模拟值1'
                },
                {
                    type: 'mock',
                    value: '模拟值2'
                }
            ]
        }
    }
] as MockMethod[]