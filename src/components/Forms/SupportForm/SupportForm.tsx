import React, { FC } from "react";

import { FormikField, FormikTextArea, SupportFormButton, SupportFormTitle } from "../../../components"
import { useFormik } from "formik";
import { supportInitialValues } from "../../../constants/supportInitialValues";
import { supportValidation } from "../../../utils/supportValidation";
import { useSendSupportMessageMutation } from "../../../features/API/supportMessagesAPI";
import { toast } from "react-toastify";

const requiredStar = <span className="text-red-400">*</span>;

const SupportForm: FC = (): JSX.Element => {
	const [ sendMessage ] = useSendSupportMessageMutation();

	const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: supportInitialValues,
        validationSchema: supportValidation,
        onSubmit: (values, { resetForm }) => {
            const { supportFirstName, supportEmail, supportTitle, supportMessage } = values;
			
			sendMessage({
				senderId: "1",
				firstName: supportFirstName,
				email: supportEmail,
				title: supportTitle,
				message: supportMessage,
				adminResponse: false
			});

			toast.success("You have successfully sent us a message");
			toast.info(" We will respond as soon as possible");

			resetForm();
        }
    });

	return (
		<form className="w-full" onSubmit={handleSubmit}>
			<SupportFormTitle/>
			<div className="flex flex-wrap -mx-3">
				<FormikField
					inputId="supportFirstName"
					text="First Name:"
					placeholder="Stefan"
					value={values.supportFirstName}
					error={errors.supportFirstName}
					touched={touched.supportFirstName}
					handleChange={handleChange}
					handleBlur={handleBlur}
					styleDiv="w-full md:w-1/2 px-3 mb-6"
					requiredStar={requiredStar}
				/>
				<FormikField
					inputId="supportEmail"
					text="Email:"
					placeholder="stefan@gmail.com"
					value={values.supportEmail}
					error={errors.supportEmail}
					touched={touched.supportEmail}
					handleChange={handleChange}
					handleBlur={handleBlur}
					styleDiv="w-full md:w-1/2 px-3"
					requiredStar={requiredStar}
				/>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<FormikField
					inputId="supportTitle"
					text="Title:"
					placeholder="Title"
					value={values.supportTitle}
					error={errors.supportTitle}
					touched={touched.supportTitle}
					handleChange={handleChange}
					handleBlur={handleBlur}
					styleDiv="w-full px-3"
					requiredStar={requiredStar}
				/>
			</div>
			<div className="flex flex-wrap -mx-3 mb-4">
				<FormikTextArea
					inputId="supportMessage"
					text="Message:"
					placeholder="Enter your message..."
					rows={6}
					value={values.supportMessage}
					error={errors.supportMessage}
					touched={touched.supportMessage}
					handleChange={handleChange}
					handleBlur={handleBlur}
					styleDiv="w-full px-3"
					requiredStar={requiredStar}
				/>
			</div>
			<SupportFormButton/>
		</form>
	);
};

export default SupportForm;
