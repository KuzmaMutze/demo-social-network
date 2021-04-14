import Button from 'antd/lib/button';
import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../../redux/selectors/users-selectors';
import { FilterType } from '../../../redux/users-reducer';
import { Select, Input } from 'formik-antd';

type PropsType = {
		onFilterChanged: (filter: FilterType) => void
}
type UsersSearchFormObjType = {
	term: string
}
type FriendFormType = "true" | "false" | "null"
type FormType = {
	term: string
	friend: FriendFormType
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

	const filter = useSelector(getUsersFilter)

	const usersSearchFormValidate = (values: any) => {
	const errors = {};
	return errors;
}
	const submit = (values: FormType, { setSubmitting }: {setSubmitting: (setSubmitting: boolean) => void}) => {
	const filter = {
		term: values.term,
		friend: values.friend === "null" ? null : values.friend === "true" ? true : false 
	}
	props.onFilterChanged(filter) 
	setSubmitting(false)
	}

	return (
			<div>
				<Formik
					enableReinitialize // igorn first render (useEffect)
					initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
					validate={usersSearchFormValidate}
					onSubmit={submit}
				>
                    {({ isSubmitting }) => (
                        <Form>
                            <Input type="text" name="term" style={{width: "200px"}} />
                            <Select style={{width: "150px"}} name="friend" >
                                <option value="null">All</option>
                                <option value="false">Only unfollowed</option>
                                <option value="true">Only followed</option>
                            </Select>
                            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                                    Submit
                            </Button>
                        </Form>
                    )}
		    	</Formik>
		    </div>
		);
});

export default UsersSearchForm;
