import React, { FC, useState, useEffect } from "react";

import { FormikField, FormikTextArea, Spinner, SupportFormButton, SupportFormTitle } from "../../../components"
import { useFormik } from "formik";
import { supportInitialValues } from "../../../constants/supportInitialValues";
import { supportValidation } from "../../../utils/supportValidation";
import { Theme, toast } from "react-toastify";
import { useAddSingleSupportMutation } from "../../../features/API/supportAPI";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { RootState } from "../../../ts/types/RootState";
import { ISupport } from "../../../ts/interfaces/ISupport/ISupport";
import { useAddSingleMessageForSupportMutation } from "../../../features/API/supportMessagesAPI";

interface IProps {
	theme: Theme;
}

const requiredStar = <span className="text-red-400">*</span>;

const SupportForm: FC<IProps> = ({ theme }): JSX.Element => {
	const userId = localStorage.getItem("userId");
	const { allSupport } = useAppSelector((state: RootState) => state.support);
	
	const [ supportId, setSupportId ] = useState<number | null>(null);
	const [ loading, setLoading ] = useState<boolean>(false);

	const [ addSingleSupport ] = useAddSingleSupportMutation();
	const [ addSingleMessageForSupport ] = useAddSingleMessageForSupportMutation();

	useEffect(() => {
		const getMySupportMessages = allSupport.find((support: ISupport) => support.senderId === userId);

		if (getMySupportMessages) {
			setSupportId(getMySupportMessages.supportId);
		};

		// eslint-disable-next-line
	}, [allSupport]);

	const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: supportInitialValues,
        validationSchema: supportValidation,
        onSubmit: async (values, { resetForm }) => {
            const { supportFirstName, supportEmail, supportTitle, supportMessage } = values;
			setLoading(true);
			
			const timestamp = new Date().getTime();
			let changeSupportId: number = 0;

			if (!supportId) {
				const getSupportId = await addSingleSupport({ senderId: userId! }).unwrap();
				changeSupportId = getSupportId.supportId;
			};

			addSingleMessageForSupport({
				firstName: supportFirstName,
				email: supportEmail,
				title: supportTitle,
				message: supportMessage,
				timestamp,
				changeTimestamp: timestamp,
				supportId: supportId ? supportId : changeSupportId
			});

			setLoading(false);
			toast.success("You have successfully sent us a message", { position: "top-left", theme });
			toast.info(" We will respond as soon as possible", { position: "top-left", theme });

			window.scrollTo(0, 0);
			resetForm();
        }
    });

	return (
		<>
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
			{ loading && <Spinner/> }
		</>
	);
};

export default SupportForm;
