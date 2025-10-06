const pathsConfig = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    verifyEmail: '/auth/verify',
    callback: '/auth/callback',
    passwordReset: '/auth/password-reset',
  },
  app: {
    home: '/home',
    profileSettings: '/home/settings/profile',
    evidenceHub: '/home/evidence-hub',
    discussion: '/home/discussion',
    selfAssessment: '/home/self-assessment',
    reports: '/home/reports',
  },
} as const;

export default pathsConfig;