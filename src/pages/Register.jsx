import { useState } from "react";
import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) newErrors.email = "請輸入 Email";
    if (!password) newErrors.password = "請輸入密碼";
    if (!confirmPassword) newErrors.confirmPassword = "請確認密碼";
    if (password !== confirmPassword) newErrors.confirmPassword = "密碼不一致";

    setErrors(newErrors);

    // 如果有錯誤，不繼續執行 Firebase 註冊
    if (Object.keys(newErrors).length > 0) return;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // 註冊成功後跳轉
    } catch (error) {
      setErrors({ email: error.message }); // 顯示 Firebase 返回的錯誤訊息
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
            註冊
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
            <TextField
              label="確認密碼"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <Button type="submit" variant="contained" sx={{backgroundColor: 'secondary.dark'}} fullWidth>
              註冊帳號
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;
