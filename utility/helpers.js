export const vRequired = { required: true, message: 'Maydonni to\'ldiring' }

export function clearObject(form){
    Object.keys(form).forEach(key => {
        form[key] = null
    })
}
export const moneyConfig = {
    masked: false,
    prefix: '',
    suffix: ' so\'m',
    thousands: ' ',
    decimal: '.',
    precision: 0,
    disableNegative: false,
    disabled: false,
    min: null,
    max: null,
    allowBlank: false,
    minimumNumberOfCharacters: 0,
}
export const moneyConfigDollar = {
    masked: false,
    prefix: '$ ',
    suffix: '',
    thousands: ' ',
    decimal: '.',
    precision: 1,
    disableNegative: false,
    disabled: false,
    min: null,
    max: null,
    allowBlank: false,
    minimumNumberOfCharacters: 0,
}
export function clone(object) {
    return JSON.parse(JSON.stringify(object))
}
export function today(format = '.') {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    var yyyy = today.getFullYear()

    return format === '.' ? dd + '.' + mm + '.' + yyyy : yyyy + '-' + mm + '-' + dd
}
export function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
export const months = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr'
]

export const filterablePeriods = [
    { id: 'today', name: 'Bugun' },
    { id: 'yesterday', name: 'Kecha' },
    { id: 'week', name: 'Joriy hafta' },
    { id: 'month', name: 'Joriy oy' },
    { id: 'quarter', name: 'Joriy kvartal' },
    { id: 'year', name: 'Joriy yil' },
    { id: null, name: 'Oraliq' }
]
function getMonday(d) {
    d = new Date(d)
    var day = d.getDay()
    var diff = d.getDate() - day + (day == 0 ? -6 : 1) // adjust when day is sunday
    return new Date(d.setDate(diff))
}
function formatDate(date) {
    var today = new Date(date)
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    var yyyy = today.getFullYear()
    return dd + '.' + mm + '.' + yyyy
}
export function setRange(filter) {
    switch (filter.range) {
        case 'today': {
            filter.from_date = today()
            filter.to_date = today()
        } break
        case 'yesterday': {
            var d = new Date()
            d.setDate(d.getDate() - 1)
            filter.from_date = formatDate(d)
            filter.to_date = formatDate(d)
        } break
        case 'week': {
            var d = getMonday(new Date())
            filter.from_date = formatDate(d)
            d.setDate(d.getDate() + 6)
            filter.to_date = formatDate(d)
        } break
        case 'month': {
            const d = today().slice(3, 10)
            filter.from_date = '01.' + d
            const last = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
            filter.to_date = last + '.' + d
        } break
        case 'quarter': {
            const q1 = ['01', '02', '03']
            const q2 = ['04', '05', '06']
            const q3 = ['07', '08', '09']
            const q4 = ['10', '11', '12']
            if (q1.includes(today().split('.')[1])) {
                filter.from_date = '01.01.' + today().split('.')[2]
                filter.to_date = '31.03.' + today().split('.')[2]
            }
            if (q2.includes(today().split('.')[1])) {
                filter.from_date = '01.04.' + today().split('.')[2]
                filter.to_date = '30.06.' + today().split('.')[2]
            }
            if (q3.includes(today().split('.')[1])) {
                filter.from_date= '01.07.' + today().split('.')[2]
                filter.to_date = '30.09.' + today().split('.')[2]
            }
            if (q4.includes(today().split('.')[1])) {
                filter.from_date = '01.10.' + today().split('.')[2]
                filter.to_date = '31.12.' + today().split('.')[2]
            }
        } break
        case 'year': {
            filter.from_date = '01.01.' + today().split('.')[2]
            filter.filter.to_date = '31.12.' + today().split('.')[2]
        } break
    }
}
