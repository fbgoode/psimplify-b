module.exports = () => ({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'Customer'
    },
    phone: {
        type: String
    },
    address: {
        address: {
            type: String
        },
        address2: {
            type: String
        },
        zip: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        }
    },
    company: {
        type: String
    },
    nationalid: {
        type: String
    },
    colnum: {
        type: String
    },
    plan: {
        type: String,
        default: 'free'
    },
    config: {
        appointments: {},
        patients: {},
        payments: {}
    },
});