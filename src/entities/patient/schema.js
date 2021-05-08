module.exports = (Types) => ({
    user: {
        type: String,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    company: {
        type: String
    },
    nationalid: {
        type: String
    },
    description: {
        type: String
    },
    nsessions: {
        type: Number
    },
    ncancelled: {
        type: Number
    },
    npaid: {
        type: Number
    },
    balance: {
        type: Number
    },
    info: [{
        key: {
            type: String
        },
        value: {
            type: String
        }
    }],
    documents: [{
        name: {
            type: String
        },
        path: {
            type: String
        }
    }],
    history: [{
        type: {
            type: String
        },
        event: {
            type: Types.ObjectId,
            refPath: 'history.type'
        }
    }],
});