import { useState } from "react";
import { auth } from "../api/firebase";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) newErrors.email = "請輸入 Email"
    if (!password) newErrors.password = "請輸入密碼"

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0
  ) {
      setErrors(newErrors);
      return; // 如果有錯誤，直接停止執行，返回
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home"); // 註冊成功後跳轉
    } catch (error) {
      if (error.code === "auth/user-not-found" || error.code === "auth/invalid-email") {
        setErrors({ email: "帳號不存在" });
      } else if (error.code === "auth/wrong-password") {
        setErrors({ password: "密碼錯誤" });
      } else {
        setErrors({ email: "登入失敗，請稍後再試" });
      }
    }
  };


  return (
    <Box sx={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 80%)'}}>
      <Container 
      maxWidth="md" 
      sx={{position: 'relative', zIndex: 0, display: "flex", justifyContent: "center", alignItems: "center", height: {xs: 'calc(100vh - 56px)',   sm: 'calc(100vh - 64px)'}}}>
        <Paper 
        elevation={2} 
        sx={{ backgroundColor: 'primary.light', padding: 4, textAlign: "center", borderRadius: 2}}>
          <Typography variant="h5" gutterBottom>
            登入
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Email"
              variant='outlined'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="密碼"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button type="submit" variant="contained" sx={{backgroundColor: 'secondary.dark'}} fullWidth>
              登入
            </Button>
            <Link 
              to={'/register'}
              style={{color: '#fff', textDecoration: "none" }}>
            <Button type="file" variant="contained" sx={{backgroundColor: 'secondary.main'}} fullWidth>
              註冊
            </Button>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;