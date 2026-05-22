import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ username:"", email:"", password:"" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault(); setError(""); setSuccess(""); setLoading(true);
    try {
      await register(form);
      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally { setLoading(false); }
  };
  return (
    <div style={s.wrapper}>
      <div style={s.card}>
        <div style={s.logo}><span>⚡</span><span style={{fontWeight:600}}>Marvellous Portal</span></div>
        <h1 style={s.title}>Create account</h1>
        <p style={s.sub}>Join Marvellous Portal today</p>
        {error && <div style={s.err}>{error}</div>}
        {success && <div style={s.ok}>{success}</div>}
        <form onSubmit={handleSubmit} style={s.form}>
          <div style={s.field}><label style={s.label}>Username</label><input style={s.input} type="text" name="username" placeholder="johndoe" value={form.username} onChange={handleChange} required/></div>
          <div style={s.field}><label style={s.label}>Email</label><input style={s.input} type="email" name="email" placeholder="john@gmail.com" value={form.email} onChange={handleChange} required/></div>
          <div style={s.field}><label style={s.label}>Password</label><input style={s.input} type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required/></div>
          <button style={s.btn} type="submit" disabled={loading}>{loading?"Creating...":"Create account"}</button>
        </form>
        <p style={s.switchText}>Have an account? <span style={s.link} onClick={()=>navigate("/login")}>Sign in</span></p>
      </div>
    </div>
  );
}
const s = {
  wrapper:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",fontFamily:"'Segoe UI',sans-serif"},
  card:{background:"#fff",borderRadius:16,border:"1px solid #e5e7eb",padding:"2.5rem 2rem",width:"100%",maxWidth:400},
  logo:{display:"flex",alignItems:"center",gap:8,marginBottom:"1.5rem",fontSize:16},
  title:{fontSize:22,fontWeight:600,color:"#111",marginBottom:4},
  sub:{fontSize:14,color:"#6b7280",marginBottom:"1.5rem"},
  err:{background:"#fef2f2",color:"#b91c1c",borderRadius:8,padding:"10px 14px",fontSize:13,marginBottom:"1rem"},
  ok:{background:"#f0fdf4",color:"#15803d",borderRadius:8,padding:"10px 14px",fontSize:13,marginBottom:"1rem"},
  form:{display:"flex",flexDirection:"column",gap:"1rem"},
  field:{display:"flex",flexDirection:"column",gap:4},
  label:{fontSize:13,color:"#374151",fontWeight:500},
  input:{padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:8,fontSize:14,outline:"none",color:"#111"},
  btn:{padding:"11px",background:"#111",color:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},
  switchText:{fontSize:13,color:"#6b7280",textAlign:"center",marginTop:"1.25rem"},
  link:{color:"#2563eb",cursor:"pointer",fontWeight:500},
};
