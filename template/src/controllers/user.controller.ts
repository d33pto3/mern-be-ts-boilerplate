import { Request, Response } from 'express';
import User from '../models/user.model';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id, newName, newEmail } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name: newName, email: newEmail },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};