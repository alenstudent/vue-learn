import api from '../index'
import urls from './urls'

const header = {}

export default {
    matches(param) {
        return api.get(urls.matches, params, header)
    }
}
