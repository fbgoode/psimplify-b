module.exports = (Types) => ({
    user: {
        type: String,
        ref: 'User'
    },
    patient: {
        type: Types.ObjectId,
        ref: 'Patient'
    },
    date: {
        type: Date,
        required: true
    },
    note: {
        type: String
    },
    status: {
        type: String,
        default: 'ok'
    },
    paid: {
        type: Boolean,
        default: false
    },
    attachments: [{
        name: {
            type: String
        },
        path: {
            type: String
        }
    }],
});