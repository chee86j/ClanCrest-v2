import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL, getSession } from "../api";

const ProtectedRoute = ({ children }) => {
  const [state, setState] = useState({ loading: true, session: null, error: null });

  useEffect(() => {
    let mounted = true;

    getSession()
      .then((session) => {
        if (mounted) {
          setState({ loading: false, session, error: null });
        }
      })
      .catch((error) => {
        if (mounted) {
          setState({ loading: false, session: null, error: error.message });
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (state.loading) {
    return <div className="auth-wall">Checking authentication…</div>;
  }

  if (state.error || !state.session?.authenticated) {
    return (
      <main className="auth-wall" aria-labelledby="auth-required-title">
        <section className="auth-card">
          <h1 id="auth-required-title">Sign in required</h1>
          <p>
            The family tree dashboard is protected. Authentication is not wired
            yet, so real family data should not be created or stored here.
          </p>
          {state.session?.message && <p className="auth-note">{state.session.message}</p>}
          {state.error && <p className="auth-note">{state.error}</p>}
          <div className="auth-actions">
            <a className="btn-primary" href={`${API_BASE_URL}/api/auth/google`}>
              Configure Google sign-in
            </a>
            <Link className="btn-secondary" to="/">
              Back to home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return children;
};

export default ProtectedRoute;
