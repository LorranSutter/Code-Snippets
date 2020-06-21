const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        }
    }
);

UserSchema.pre('save', function (next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const document = this;
        bcrypt.hash(document.password, saltRounds,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

UserSchema.path('name').validate(function (name) {
    return name.length >= 1 && name.length <= 100;
}, 'Name length must be between 1 and 100');

UserSchema.path('password').validate(function (passoword) {
    return passoword.length >= 6;
}, 'Password min length must be 6');

module.exports = mongoose.model('User', UserSchema);