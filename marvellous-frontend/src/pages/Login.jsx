import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const res = await login(form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);

      navigate("/dashboard");

    } catch (err) {

      setError(
        err.response?.data?.message || "Invalid email or password"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.left}>
        <h1 style={styles.heading}>Marvellous Portal</h1>

        <p style={styles.text}>
          Secure and modern management system using React and Spring Boot.
        </p>
      </div>

      <div style={styles.card}>

        <h2 style={styles.title}>Welcome Back 👋</h2>

        <p style={styles.subtitle}>Login to continue</p>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button style={styles.button} type="submit">
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        <p style={styles.registerText}>
          Don't have an account?{" "}

          <span
            style={styles.link}
            onClick={() => navigate("/register")}
          >
            Register
          </span>

        </p>

      </div>
    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #141e30, #243b55)",
    gap: "60px",
    fontFamily: "Segoe UI",
  },

  left: {
    color: "white",
    maxWidth: "400px",
  },

  heading: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "18px",
    color: "#d1d5db",
  },

  card: {
    background: "white",
    width: "380px",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  title: {
    marginBottom: "5px",
  },

  subtitle: {
    color: "#6b7280",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  error: {
    background: "#fee2e2",
    color: "#b91c1c",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  },

  registerText: {
    marginTop: "18px",
    textAlign: "center",
    color: "#6b7280",
  },

  link: {
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "bold",
  },
};