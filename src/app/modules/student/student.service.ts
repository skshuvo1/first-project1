import { studentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await studentModel.find({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
