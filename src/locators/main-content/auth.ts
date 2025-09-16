export const AUTH_PAGE_LOCATORS = {
  login: {
    emailInput: {
      role: 'textbox',
      name: 'Email Address',
    },
    passwordInput: {
      role: 'textbox',
      name: 'Password',
    },
    loginButton: {
      role: 'button',
      name: 'Login',
    },
  },
  register: {
    emailInput: {
      role: 'textbox',
      name: 'Email Address',
    },
    nameInput: {
      role: 'textbox',
      name: 'Name',
    },
    signupButton: {
      role: 'button',
      name: 'Signup',
    },
  },
} as const
