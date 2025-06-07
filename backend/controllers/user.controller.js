import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try { 
        const { fullname, email, phoneNumber, password, role } = req.body;
        
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({ message: 'All fields are required', success: false }); 
        } 
        
        let USER = await User.findOne({ email });
        if (USER) {
            return res.status(400).json({ message: 'User already exists', success: false });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });

        return res.status(201).json({ message: 'User registered successfully', success: true });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', success: false });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }
        
        const USER = await User.findOne({ email });
        if (!USER) {
            return res.status(400).json({ message: 'Invalid credentials (Email or Password)', success: false });
        }
        
        const isPasswordMatch = await bcrypt.compare(password, USER.password); 
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid credentials (Email or Password)', success: false });
        }
        
        if (USER.role !== role) {
            return res.status(400).json({ message: 'Invalid role', success: false });
        }
        
        const tokenData = {
            userId: USER._id,
        };
        
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        const user = {
            _id: USER._id,
            fullname: USER.fullname,
            email: USER.email,
            phoneNumber: USER.phoneNumber,
            role: USER.role,
            profile: USER.profile
        };

        return res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        }).json({ message: `Welcome Back ${USER.fullname}`, user, success: true });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', success: false });
    }
};

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({ message: "Logged out successfully", success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', success: false });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        if (!fullname || !email || !phoneNumber || !bio || !skills) {
            return res.status(400).json({ message: 'All fields are required', success: false });
        }

        const skillsArray = Array.isArray(skills) ? skills : skills.split(',');
        const userID = req.user.id; 

        let user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        user.fullname = fullname;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.profile.bio = bio;
        user.profile.skills = skillsArray;

        await user.save();
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            profile: user.profile
        };

        return res.status(200).json({ message: 'Profile updated successfully', user, success: true });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', success: false });
    }
};
