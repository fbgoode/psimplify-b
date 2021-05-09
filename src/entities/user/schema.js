module.exports = () => ({
    _id: {
        type: String
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
        appointments: {
            main: {
                title: {
                    type: String,
                    default: "Sesión"
                },
                duration: {
                    type: Number,
                    default: 45
                },
                extra: {
                    type: Number,
                    default: 15
                },
            },
            schedule: {
                morning: {
                    active: {
                        type: Boolean,
                        default: true
                    },
                    from: {
                        hour: {
                            type: Number,
                            default: 9
                        },
                        minute: {
                            type: Number,
                            default: 0
                        }
                    },
                    to: {
                        hour: {
                            type: Number,
                            default: 14
                        },
                        minute: {
                            type: Number,
                            default: 0
                        }
                    }
                },
                afternoon: {
                    active: {
                        type: Boolean,
                        default: true
                    },
                    from: {
                        hour: {
                            type: Number,
                            default: 15
                        },
                        minute: {
                            type: Number,
                            default: 0
                        }
                    },
                    to: {
                        hour: {
                            type: Number,
                            default: 20
                        },
                        minute: {
                            type: Number,
                            default: 0
                        }
                    }
                }
            },
            specialDays: {
                monday: {
                    override: {
                        type: Boolean,
                        default: false
                    },
                    schedule: {}
                },
                tuesday: {
                    override: {
                        type: Boolean,
                        default: false
                    },
                    schedule: {}
                },
                wednesday: {
                    override: {
                        type: Boolean,
                        default: false
                    },
                    schedule: {}
                },
                thursday: {
                    override: {
                        type: Boolean,
                        default: false
                    },
                    schedule: {}
                },
                friday: {
                    override: {
                        type: Boolean,
                        default: false
                    },
                    schedule: {}
                },
                saturday: {
                    override: {
                        type: Boolean,
                        default: true
                    },
                    schedule: {}
                },
                sunday: {
                    override: {
                        type: Boolean,
                        default: true
                    },
                    schedule: {}
                }
            },
            exclude: [{
                from: {
                    type: Date
                },
                to: {
                    type: Date
                },
                title: {
                    type: String
                },
            }]
        },
        patients: {},
        payments: {}
    },
});