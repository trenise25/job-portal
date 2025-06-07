import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        role: 'student'
    });
    const { signup } = useAuth();
    const navigate = useNavigate();

    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signup(formData);
        if (result.success) {
            navigate('/');
        }
    };

    // Redirect if user is already logged in
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={handleSubmit} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <h1 className="font-bold text-xl mb-5">Sign Up</h1>

                    <div className="my-2">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={formData.fullname}
                            name="fullname"
                            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="my-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={formData.email}
                            name="email"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="my-2">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Enter a strong password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={formData.role === 'student'}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="cursor-pointer"
                                />
                                <Label>Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={formData.role === 'recruiter'}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="cursor-pointer"
                                />
                                <Label>Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Button with loading state */}
                    {loading ? (
                        <Button className="w-full my-4">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-4">Signup</Button>
                    )}

                    <span className="text-sm">
                        Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
