//import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
//import SignupForm from './../../_auth/forms/SignupForm';

export const SignupValidation = z.object({
  //name: z.string().min(2, { message: "Too short" }),
  name: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be minimum 8 characters" }),
});
