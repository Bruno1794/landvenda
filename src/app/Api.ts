/*export const API_URL = 'http://127.0.0.1:8000/api';*/
export const API_URL = 'https://led.sitesdahora.com.br/api';

export function POST_URL() {
    return {
        url : API_URL + '/creat-client'
    };
}