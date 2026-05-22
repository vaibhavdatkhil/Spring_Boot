export default function Dashboard() {

  const username = localStorage.getItem("username");

  return (
    <div style={styles.container}>

      <div style={styles.card}>
        <h1>Welcome {username} 👋</h1>

        <p>Marvellous Portal Dashboard</p>
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
    background: "#111827",
    color: "white",
  },

  card: {
    background: "#1f2937",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
  },
};