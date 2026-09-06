const AUTH_NOT_CONFIGURED_MESSAGE =
  "Authentication is not configured yet. Configure an auth provider before enabling protected data.";

export const getCurrentUser = (req) => {
  // Future implementation should verify a trusted server-side session/JWT here.
  // Do not trust userId, role, or ownership fields submitted by the browser.
  return null;
};

export const requireAuth = (req, res, next) => {
  const user = getCurrentUser(req);

  if (!user) {
    res.status(401).json({
      message: "Authentication required",
      action: "Configure server-side auth before accessing protected resources.",
    });
    return;
  }

  req.user = user;
  next();
};

export const sessionStatus = (req, res) => {
  const user = getCurrentUser(req);

  res.json({
    authenticated: Boolean(user),
    user,
    authConfigured: false,
    message: user ? undefined : AUTH_NOT_CONFIGURED_MESSAGE,
  });
};

export const googleLoginPlaceholder = (req, res) => {
  res.status(501).json({
    message: "Google OAuth is not implemented yet.",
    requiredBeforeProduction: [
      "Choose and configure the auth provider",
      "Store OAuth secrets in the deployment secret manager",
      "Validate sessions on every protected API route",
      "Add dedicated auth rate limits and CSRF protection if cookie sessions are used",
    ],
  });
};
