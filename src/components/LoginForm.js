import React, {Component, Fragment} from 'react'
import {Formik, Form, Field} from 'formik'
import {Select} from 'formik-material-ui'
import {Box, Button, MenuItem} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';

import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class LoginForm extends Component {
    state={
        value: 'Select...'
    }

    handleChange = (value) => {
        this.setState({value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {onLoading, setAuthedUser, dispatch} = this.props
        const authedUser = this.state.value

        new Promise((resolve, reject) => {
            onLoading()
            setTimeout(() => resolve(), 300);
        }).then(() => dispatch(setAuthedUser(authedUser)))
    }

    render() {
        
        const {usersObjtoArr} = this.props
        
        return(
            <div>
                <Formik
                    initialValues={{
                        select: 'none',
                    }}
                    onSubmit={this.handleSubmit}
                    render={({submitForm, isSubmitting}) => (
                        <Form>
                            <Box margin={1}>
                                <Field
                                    component={Select}
                                    type="text"
                                    name="select"
                                    label="Select"
                                    select
                                    variant="standard"
                                    helperText="Please select user"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    {usersObjtoArr.map((user) => (
                                        <MenuItem key={user.id} value={user.id}>
                                            <div>
                                                <Avatar  src={user.avatarURL} alt= {user.name} />
                                            </div>
                                            <div>
                                                {user.name}
                                            </div>
                                        </MenuItem>
                                        ))}
                                </Field>
                            </Box>
                            <Box margin={1}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Sign In
                                </Button>
                            </Box>
                        </Form>
                    )}
                >
                </Formik>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        usersObjtoArr: Object.values(users),
    }
}

LoginForm.propTypes = {
    onLoading: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(LoginForm)