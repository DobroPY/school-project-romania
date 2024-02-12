const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleNewUser = async (req,res) => {

    try {
        // Check if all required fields are present
        const fields = ['email', 'password', 'first_name', 'middle_name', 'middle_name'];
        const requestData = req.body || req.query; // Assuming priority to req.body
        const missingFields = fields.filter(field => !requestData[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({ 'message': `${missingFields.join(", ")} are required` });
        }

        // Check for duplicate user
        const duplicate = await User.findOne({ where: { email: requestData.email } });
        if (duplicate) return res.sendStatus(409); // Conflict

        // Hash password
        const hashedPassword = await bcrypt.hash(requestData.password, 10);

        // Generate refresh token
        const refreshToken = jwt.sign(
            { 'username': requestData.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        // Create and save the user
        const user = {
            first_name: requestData.first_name,
            middle_name: requestData.middle_name,
            last_name: requestData.middle_name,
            email: requestData.email,
            password: hashedPassword,
            status: 1,
            refreshToken: refreshToken,
            roles: ''
        };

        const createdUser = await User.create(user);
        res.status(201).json({ 'success': `New User ${requestData.email} created!`, user: createdUser });

    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
};

module.exports = {handleNewUser};