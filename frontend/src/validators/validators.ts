import * as z from "zod";

export const formSchemaDetailEmployee = z.object({
    postalCode: z
        .string()
        .min(1, "Need postal code field")
        .min(5, "Minimum 5 characters")
        .max(5, "Maximum 5 characters"),
    village: z
        .string()
        .min(1, "Need village field")
        .regex(
            RegExp("[A-Z][a-z]+(?: [A-Z][a-z]+)?"),
            "Non special char and number"
        )
        .min(2, "Minimum 2 characters")
        .max(20, "Maximum 20 characters "),
    subdistrict: z
        .string()
        .min(1, "Need subdistric field")
        .regex(
            RegExp("[A-Z][a-z]+(?: [A-Z][a-z]+)?"),
            "Non special char and number"
        )
        .min(4, "Minimum 4 characters")
        .max(20, "Minimum 20 characters"),
    city: z
        .string()
        .min(1, "Need city field")
        .regex(
            RegExp("[A-Z][a-z]+(?: [A-Z][a-z]+)?"),
            "Non special char and number"
        )
        .min(4, "Minimum 4 characters")
        .max(25, "Minimum 25 characters"),
    province: z
        .string()
        .regex(
            RegExp("[A-Z][a-z]+(?: [A-Z][a-z]+)?"),
            "Non special char and number"
        )
        .min(4, "Minimum 4 characters")
        .max(25, "Minimum 25 characters"),
    country: z
        .string()
        .regex(
            RegExp("[A-Z][a-z]+(?: [A-Z][a-z]+)?"),
            "Non special char and number"
        )
        .min(4, "Minimum 4 characters")
        .max(25, "Minimum 25 characters"),
    phone: z
        .string()
        .min(1, "Need phone number")
        .min(9, "Minimum 9 characters")
        .max(16, "Maximum 16 characters"),
    dob: z.date(),
    gender: z.string().min(1, "Select one gender"),
    maritalStatus: z.string().min(1, "Select one status"),
    idCard: z
        .string()
        .min(1, "Need id card field")
        .min(16, "Minimum 16 characters")
        .max(16, "Maximum 16 characters"),
    religion: z.string().min(1, "Select one religion"),
    tertiaryEducation: z
        .string()
        .min(1, "Need tertiary education field")
        .regex(
            RegExp("[A-Z][a-z]+(?: [A-Z][a-z]+)?"),
            "Non special char and number"
        )
        .min(4, "Minimum 4 characters")
        .max(50, "Maximum 50 characters"),
    job: z.string().min(1, "Select one job"),
    salary: z
        .string()
        .min(6, "Minimun 6 digit")
        .max(16, "Maximum 16 digit")
        .regex(RegExp("^[0-9]+$"), "Number only")
});
